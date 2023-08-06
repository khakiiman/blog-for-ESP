import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Link, useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: 'about' },
  { name: 'LogOut', href: 'logout' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='sticky backdrop-blur-[10px] bg-[rgba(255, 255, 255, 0.8)] inset-x-0 top-0 z-50'>
      <nav
        className='mx-auto flex w-full px-[7%] lg:px-[9%] xl:px-[11%] h-[80px] sm:h-full items-center justify-between p-6'
        aria-label='Global'
      >
        <div className='flex'>
          <Link to='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>ExirPouya</span>
            <img
              alt='logoOfCompany'
              className='h-14 w-auto'
              src='images/logo.png'
            />
          </Link>
        </div>

        <Link className='flex' to='/'>
          <span className=' text-2xl text-[#111827] tracking-[2px] font-black uppercase'>
            TechInsight
          </span>
        </Link>

        <div className='flex sm:hidden'>
          <button
            type='button'
            className='inline-flex items-center justify-center rounded-md p-2.5 text-[#111827]'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6 stroke-[3px]' aria-hidden='true' />
          </button>
        </div>
        <ul className='hidden sm:flex sm:gap-x-12'>
          <li>
            <Link
              to={navigation[0].href}
              className='hover:text-red-500 text-lg font-semibold leading-6 text-[#111827]'
            >
              {navigation[0].name}
            </Link>
          </li>
          <li>
            <Link
              to={navigation[1].href}
              className='hover:text-red-500 text-lg font-semibold leading-6 text-[#111827]'
            >
              {navigation[1].name}
            </Link>
          </li>
          <li> Based on Auth Show Login or Logout</li>
        </ul>
      </nav>
      <Dialog
        as='div'
        className='sm:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-50' />
        <Dialog.Panel className='fixed bg-white inset-y-0 right-0 z-50 w-full overflow-y-auto sm:max-w-sm divide-y divide-gray-300'>
          <div className='mx-auto flex w-full px-[7%] h-[80px] items-center justify-between p-6 sm:mt-0'>
            <Link to='/' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <img
                alt='logoOfCompany'
                className='h-14 w-auto'
                src='images/logo.png'
              />
            </Link>
            <Link className='flex' to='/'>
              <span className='text-2xl text-[#111827] tracking-[2px] font-black uppercase'>
                TechInsight
              </span>
            </Link>
            <div className='flex sm:hidden'>
              <button
                type='button'
                className='inline-flex items-center justify-center p-2.5 rounded-md text-[#111827]'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon
                  className='h-6 w-6 stroke-[3px]'
                  aria-hidden='true'
                />
              </button>
            </div>
          </div>
          <div className='px-8 mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500'>
              <ul className='space-y-12 py-16 divide-y'>
                <li>
                  <Link
                    to={navigation[0].href}
                    className='text-xl font-semibold leading-6 text-gray-900'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {navigation[0].name}
                  </Link>
                </li>
                <li className='pt-8'>
                  <Link
                    to={navigation[1].href}
                    className='text-xl font-semibold leading-6 text-gray-900'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {navigation[1].name}
                  </Link>
                </li>
                <li className='pt-8'>Based on Auth Show Login or Logout</li>
              </ul>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
