/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import PostItem from './PostItem/PostItem';

const PostList = ({ post, remove }) => {
  // if no posts exist
  if (!post.length) {
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
      {post.map((item, index) => {
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
