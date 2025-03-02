import React, { useState } from 'react'
import TopNav from './TopNav'
import {  useSelector } from 'react-redux'
import { userName } from '../redux/slices/userSlice.js'
import { useGetProductsQuery } from '../redux/services/productsApi.js'
import ProductsCard from './ProductsCard.jsx'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const HomePage = () => {

  const {data, error, isLoading} = useGetProductsQuery(); 

  let productsData;
  let content = '';
  if(error){
    content = `Oh no, there was an error!`;
  } else if (isLoading) {
    content = `Loading...`;
  }else{
    productsData = data;
  }

  

  return (
    <div className='bg-light'> 
        <TopNav />
        <h3>{content}</h3>
        <Container style={{ paddingTop: '20px'}}>
        <Row style={{ gap: '14px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        {
          productsData?.map((item) => {
            return <ProductsCard key={item.id} {...item} />
          })
        }
        </Row>
        </Container>
    </div>
  )
}

export default HomePage