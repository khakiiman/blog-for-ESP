/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

// Packages
import { useDispatch, useSelector } from 'react-redux'; // Add this import

// Files
import PostItem from './PostItem/PostItem';

// Codes
const PostList = ({ remove }) => {
  // reverse posts to show new added post at the top of list of posts.
  const reversedPosts = useSelector((state) => state.posts.posts); // Use Redux state

  // if no posts exist
  if (!reversedPosts.length) {
    return (
      <div className='flex flex-col justify-center items-center pt-12 pb-2 gap-6'>
        <img
          className='w-[23rem]'
          src='/images/NotFound.png'
          alt='notFoundImg'
        />
        <h2 className='text-2xl font-bold'>Not Found</h2>
      </div>
    );
  }

  return (
    <div>
      {reversedPosts.map((item, index) => {
        return (
          <PostItem
            key={item.id}
            remove={remove}
            id={item.id}
            post={item}
            title={item.title}
            body={item.body}
            name={item.name}
          />
        );
      })}
    </div>
  );
};

export default PostList;
