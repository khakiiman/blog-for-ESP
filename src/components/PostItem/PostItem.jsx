/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import formatDate from '../../utils/formatDate';
import getRandomPastDate from '../../utils/randomDate';
import MyButton from '../UI/Button/MyButton';

const PostItem = ({ id, title, body, post, remove, name }) => {
  const date = getRandomPastDate();
  return (
    <div className='flex pt-8 justify-between items-center gap-2 sm:gap-4 md:gap-8 xl:gap-12'>
      <Link to={`posts/${id}`} className='py-4'>
        <article className='space-y-4 w-full xl:grid xl:grid-cols-3 xl:items-center xl:justify-start xl:space-x-2 xl:space-y-0'>
          <dl className='flex items-center gap-3 xl:flex-col xl:items-start'>
            <dt className='sr-only'>
              This author published this post on this time
            </dt>
            <dd className=''>
              <h1 className='text-sm'>{name}</h1>
            </dd>
            <dd className='text-sm font-medium leading-6 text-gray-500'>
              <time dateTime={date}>{formatDate(date)}</time>
            </dd>
          </dl>
          <dl className='text-2xl font-extrabold leading-8 tracking-tight '>
            <dt className='sr-only'>Post title</dt>
            <dd className='text-gray-900 text-2xl font-normal capitalize'>
              {/* make title to be shorter and put ... at the end of shorter version */}
              {title}
            </dd>
          </dl>
          <div className='pt-4 xl:pt-0 max-w-none text-gray-500 capitalize-first'>
            {/* make body to be shorter to see just 18 words*/}
            {/* and put ... at the end to show the rest  */}
            {body.split(' ').slice(0, 18).join(' ') +
              (body.split(' ').length > 18 ? ' ...' : '')}
          </div>
        </article>
      </Link>
      <div className='post__btns'>
        <MyButton onClick={() => remove(post)}>Delete</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
