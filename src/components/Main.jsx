// Codes
// eslint-disable-next-line react/prop-types
const Main = ({ children }) => {
  return (
    <main className='flex justify-center flex-col w-full px-[7%] lg:px-[9%] xl:px-[11%]'>
      {children}
    </main>
  );
};

export default Main;
