/* eslint-disable no-undef */

//Writing Tests for Fetching Posts
import { render, waitFor, screen } from '@testing-library/react';
import Blog from './Blog';

// Mock axios for the API requests
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: [] })), // Mock data to be resolved
}));

test('fetches and displays posts', async () => {
  render(<Blog />);

  // Wait for the posts to be fetched and rendered
  await waitFor(() => {
    expect(screen.getByText(/All Posts/i)).toBeInTheDocument(); // Verify page content
  });
});

// Writing Tests for Rendering Posts
test('renders posts', async () => {
    const mockPosts = [
      { id: 1, title: 'Post 1', body: 'Content 1', userId: 1, name: 'Author 1' },
      { id: 2, title: 'Post 2', body: 'Content 2', userId: 2, name: 'Author 2' },
    ];
  
    // Mock axios to return mockPosts data
    jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: mockPosts });
  
    render(<Blog />);
  
    // Wait for the posts to be fetched and rendered
    await waitFor(() => {
      mockPosts.forEach((post) => {
        expect(screen.getByText(post.title)).toBeInTheDocument();
        expect(screen.getByText(post.body)).toBeInTheDocument();
        expect(screen.getByText(post.name)).toBeInTheDocument();
      });
    });
  });
  