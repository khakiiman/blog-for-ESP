/* eslint-disable no-unused-vars */
// Packages
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Files
import BlogService from '../API/BlogService';
import Loader from '../components/UI/Loader/MyLoader';
import MyButton from '../components/UI/Button/MyButton';
import Comment from '../components/Comments/Comment';
import { useFetch } from '../hooks/useFetch';
import { textTransformation } from '../utils/spelling';

// Code
const Post = () => {
  // States
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [comment, setComment] = useState([]);

  const navigate = useNavigate();

  // Fetching Posts
  const [fetchPostId, loader, postError] = useFetch(async () => {
    const res = await BlogService.getById(id);
    setItem(res.data);
  });

  // Fetching Comments
  const [fetchComment, сommentLoader, commentError] = useFetch(async () => {
    const res = await BlogService.getCommentById(id);
    setComment(res.data);
  });

  // Side effect we need...
  useEffect(() => {
    fetchPostId(id);
    fetchComment(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='flex flex-col justify-center items-center pt-8'>
      {item.id ? (
        <div>
          <MyButton onClick={() => navigate(-1)}>Back</MyButton>

          <h2 className='text-gray-900 mt-[2rem] mx-0 mb-[1rem] text-2xl font-normal capitalize'>
            {textTransformation(item.title)}.
          </h2>
          <p className='capitalize-first pt-4 xl:pt-0 max-w-none text-gray-700'>
            {item.body}.
          </p>
        </div>
      ) : (
        <Loader />
      )}
      <hr className='flex my-8 sm:my-14 border w-10/12 border-t-gray-300' />
      {comment.length > 0 && ( // Add this condition to check if there are comments
        <div>
          <h2 className='text-gray-900 text-xl font-normal capitalize'>
            Comments :
          </h2>
          {comment.map((i) => {
            return <Comment key={i.name} email={i.email} body={i.body} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Post;
