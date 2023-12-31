/* eslint-disable react/prop-types */
import MySelect from '../UI/Select/MySelect';

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div className='flex items-center justify-between gap-4 sm:gap-8'>
      <div className='relative w-full'>
        <input
          value={filter.query}
          onChange={(e) => setFilter({ ...filter, query: e.target.value })}
          aria-label='Search posts'
          placeholder='Search posts...'
          className='block w-full h-[42px] rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900'
        />
        <svg
          className='absolute right-3 top-3 h-5 w-5 text-gray-400'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          />
        </svg>
      </div>

      <MySelect
        defaultValue='Search By...'
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        options={[
          { value: 'title', label: 'Title' },
          { value: 'name', label: 'Author' },
        ]}
      />
    </div>
  );
};

export default PostFilter;
