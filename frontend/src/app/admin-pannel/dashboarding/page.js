"use client";

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import DefaultLayout from '@/components/Allcomponents/Defaultlayout';

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const userInfo = useSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!userInfo?.userInfo?.token) {
      router.push('/');
    } else {
      setIsLoading(false);
    }
  }, [userInfo, router]);

  if (isLoading) {
    return <div>Loading...</div>; // Optionally, you can show a loading spinner here
  }

  return (
    <>
      <DefaultLayout />
    </>
  )
};

export default Page;
