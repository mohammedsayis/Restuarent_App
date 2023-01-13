import React, { useEffect, useState } from 'react'
import RestuarentCards from './RestuarentCards'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RestuarentListAction } from '../Actions/RestuarentListAction';
import { useDispatch, useSelector } from 'react-redux';
import { logDOM } from '@testing-library/react';

function ResturentList() {
    //to hold Value
    const [allRestuarent , setRestuarent] = useState([])
    //Function to call api to get all restuarent information from restuarent.json
    // const getRestuarents = async()=>{
    //     await fetch('/restaurants.json')
    //     .then((data)=>{
    //         data.json()
    //         .then((result)=>{ 
    //             setRestuarent(result.restaurants)
    //         })
    //     })
       
    // }
    
    console.log(allRestuarent);
    const dispatch = useDispatch()
    const result = useSelector(state=>state. restuarentReducer)
    
    
    console.log(result);
    const {resturentList} = result
    
    console.log(resturentList);
    //hooks 
    useEffect(()=>{
        // getRestuarents() 
        dispatch(RestuarentListAction())
    },[])
    
  return (
    <Row>
        {
         resturentList.map(item=>(
            // <h3>{item.name}</h3> 
            <Col sm={12} md={6} lg={4} xl={3}>
            <RestuarentCards restaurant ={item}/>
            </Col>
            
         ))
        }
    </Row>
  )
}

export default ResturentList