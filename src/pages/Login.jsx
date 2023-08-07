// Packages
import { useLocation, useNavigate } from 'react-router-dom';

// Files
import { useAuth } from '../hooks/useAuth';
import MyButton from '../components/UI/Button/MyButton';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useAuth();

  const fromPage =
    (location.state && location.state.from && location.state.from.pathname) ||
    '/';

  function submit(e) {
    e.preventDefault();
    const form = e.target;
    const user = form.username.value;
    signIn(user, () => navigate(fromPage, { replace: true }));
  }

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-md w-full sm:w-96'>
        <h2 className='text-2xl font-semibold mb-4 text-center'>Log in</h2>
        <hr className='mb-4' />
        <form onSubmit={submit} className='space-y-4'>
          <div className='flex flex-col'>
            <label htmlFor='username' className='text-sm font-medium mb-1'>
              Username
            </label>
            <input
              aria-label='Username'
              type='text'
              id='username'
              name='username'
              className='px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300'
              required
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='password' className='text-sm font-medium mb-1'>
              Password
            </label>
            <input
              aria-label='Password'
              type='password'
              id='password'
              name='password'
              className='px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300'
              required
            />
          </div>
          <MyButton className='w-full' style={{ marginTop: '1rem' }}>
            Submit
          </MyButton>
        </form>
        <p className='text-sm mt-4 text-gray-500'>
          * Type in your name and press submit to enter.
        </p>
      </div>
    </div>
  );
};

export default Login;
