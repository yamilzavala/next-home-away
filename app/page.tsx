import { Button } from '@/components/ui/button';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <h1 className="text-3xl">
        HomePage
      </h1>
      <Button variant='outline' size='lg' className='capitalize mt-8'>click me</Button>
    </>
  );
};

export default HomePage;
