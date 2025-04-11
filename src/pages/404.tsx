import { useEffect, useState } from 'react';

const NotFound = () => {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/';
    }, 3000);

    const countdownInterval = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(countdownInterval);
    };
  }, []);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-50'>
      <h1 className='text-6xl font-bold text-gray-800'>404</h1>
      <p className='mt-3 text-xl text-gray-600'>Page not found</p>
      <p className='mt-4 text-sm text-gray-500'>
        Redirecting to homepage in{' '}
        <span className='font-bold'>{countdown}</span>{' '}
        {countdown === 1 ? 'second' : 'seconds'}...
      </p>
    </div>
  );
};

export default NotFound;
