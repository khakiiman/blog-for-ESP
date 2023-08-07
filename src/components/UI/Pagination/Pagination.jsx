/* eslint-disable react/prop-types */
import MyButtonS from '../ButtonS/MyButtonS';
import { usePagination } from '../../../hooks/usePagination';

const Pagination = ({ totalPages, page, changePage }) => {
  const pagesArray = usePagination(totalPages);

  return (
    <div className='flex justify-center pt-8'>
      {pagesArray.map((i) => (
        <MyButtonS
          onClick={() => changePage(i)}
          key={i}
          current={page === i ? true : false}
        >
          {i}
        </MyButtonS>
      ))}
    </div>
  );
};

export default Pagination;
