import React from 'react'
import Tour from '@/components/Tour';
async function Page({params}) {
    const query = await params;
   const id = query.id;
  return (
   
    <Tour/>
  )
}

export default Page
