import { useMemo } from 'react';

export const usePosts = (posts, sort, query) => {
  const sortedAndSearchedPosts = useMemo(() => {
    let sortedPosts = [...posts];

    if (sort === 'title') {
      sortedPosts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === 'name') {
      sortedPosts.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (query) {
      sortedPosts = sortedPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    return sortedPosts;
  }, [posts, sort, query]);

  return sortedAndSearchedPosts;
};
