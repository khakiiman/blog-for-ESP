/* eslint-disable react/prop-types */
import { useState } from 'react';
import MyInput from './UI/Input/MyInput';
import MyButton from './UI/Button/MyButton';

const PostForm = ({ getPost }) => {
  const [article, setArticle] = useState({ title: '', body: '' });

  const addNewPost = (e) => {
    e.preventDefault();
    const newArticle = {
      ...article,
      id: Date.now(),
    };
    getPost(newArticle);
    setArticle({ title: '', body: '' });
  };

  return (
    <form className='flex flex-col justify-center items-center gap-4 w-full'>
      <MyInput
        type='text'
        value={article.title}
        onChange={(e) => setArticle({ ...article, title: e.target.value })}
        placeholder='Title'
        style={{
          width: '100%',
        }}
      />
      <MyInput
        type='text'
        placeholder='Content'
        value={article.body}
        onChange={(e) => setArticle({ ...article, body: e.target.value })}
        style={{
          width: '100%',
        }}
      />
      <MyButton
        onClick={(e) => addNewPost(e)}
      >
        Add Post to Database
      </MyButton>
    </form>
  );
};

export default PostForm;
