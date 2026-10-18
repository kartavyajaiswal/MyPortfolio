import { useEffect, useState } from 'react';
import {
  contact,
  githubHiddenRepos,
  githubPreferredOrder,
} from '../data/portfolio';

export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
  fork: boolean;
  homepage: string | null;
}

export function useGithubRepos() {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const username = contact.githubUser || 'codebykartavya';
        const headers: HeadersInit = {
          Accept: 'application/vnd.github.v3+json',
        };

        // Support personal token from .env for rate-limit protection (5000 req/hr)
        const envToken = import.meta.env.VITE_GITHUB_TOKEN;
        if (envToken) {
          headers.Authorization = `Bearer ${envToken}`;
        }

        let response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
          { headers },
        );

        // If the primary username is not found (404), fall back to active username
        if (response.status === 404 && username !== 'kartavyajaiswal') {
          console.warn(
            `[useGithubRepos] GitHub user "${username}" returned 404. Attempting fallback to "kartavyajaiswal".`,
          );
          const fallbackResponse = await fetch(
            `https://api.github.com/users/kartavyajaiswal/repos?sort=updated&per_page=100`,
            { headers },
          );
          if (fallbackResponse.ok) {
            response = fallbackResponse;
          }
        }

        // Handle rate limiting (403)
        if (response.status === 403) {
          const resetHeader = response.headers.get('x-ratelimit-reset');
          const resetTime = resetHeader
            ? new Date(parseInt(resetHeader, 10) * 1000).toLocaleTimeString()
            : null;
          throw new Error(
            resetTime
              ? `GitHub API rate limit exceeded (60 req/hr). Resets at ${resetTime}. Add VITE_GITHUB_TOKEN in .env to increase to 5,000 req/hr.`
              : 'GitHub API rate limit exceeded. Add VITE_GITHUB_TOKEN in .env to increase to 5,000 req/hr.',
          );
        }

        if (!response.ok) {
          throw new Error(
            `GitHub API error (${response.status}): ${response.statusText}`,
          );
        }

        const data: GithubRepo[] = await response.json();

        const filtered = data
          .filter(
            (repo) =>
              !repo.fork &&
              !githubHiddenRepos.includes(repo.name) &&
              repo.name !== 'MyPortfolio',
          )
          .sort((a, b) => {
            const ai = githubPreferredOrder.indexOf(a.name);
            const bi = githubPreferredOrder.indexOf(b.name);
            const aRank = ai === -1 ? 999 : ai;
            const bRank = bi === -1 ? 999 : bi;
            if (aRank !== bRank) return aRank - bRank;
            return b.stargazers_count - a.stargazers_count;
          });

        setRepos(filtered);
      } catch (err) {
        console.error('Failed to fetch GitHub repos:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return { repos, loading, error };
}
