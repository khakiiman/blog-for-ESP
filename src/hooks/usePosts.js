// Packages
import { useMemo } from 'react';
import { useSelector } from 'react-redux'; // Add this line

// Files

// Codes
export const usePosts = (sort, query) => {
  const posts = useSelector((state) => state.posts.posts); // Fetch posts from Redux store
  // sorted And Searched Posts Algorithm
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
          post.title.toLowerCase().includes(query?.toLowerCase()) ||
          post.name.toLowerCase().includes(query?.toLowerCase())
      );
    }

    return sortedPosts;
  }, [posts, sort, query]);

  return sortedAndSearchedPosts;
};
