import Banner from '@/components/Banner/Banner';
import CategorySweets from '@/components/CategorySweets/CategorySweets';
import Layout from '@/components/Layout';
import React from 'react';

const index = () => {
  return (
    <>
      <Layout>
        <Banner></Banner>
        <CategorySweets></CategorySweets>
      </Layout>
    </>
  );
};

export default index;