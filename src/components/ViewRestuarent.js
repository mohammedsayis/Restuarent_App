import React from 'react'
import { useParams } from 'react-router-dom'
import { useState  , useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import RestuarentOpration from './RestuarentOpration';
import RestuarentReview from './RestuarentReview';
function ViewRestuarent() {
    const params = useParams()
    // console.log(params.id);
    const [allRestuarent , setRestuarent] = useState([])
    //Function to call api to get all restuarent information from restuarent.json
    const getRestuarents = async()=>{
        await fetch('/restaurants.json')
        .then((data)=>{
            data.json()
            .then((result)=>{ 
                setRestuarent(result.restaurants)
            })
        })
       
    }
    
    
    //hooks 
    useEffect(()=>{
        getRestuarents()    
    },[])
    const viewest = allRestuarent.find(item => item.id == params.id)
    // console.log(viewest);
  return (
    <>
    {
        viewest?(
            <Row>
                <Col>
                <Image src={viewest.photograph} fluid />
                </Col>
                <Col>
                <p>ID : {viewest.id}</p>
                  <h1>Name : {viewest.name} <br /> </h1>
                  <h3> Neighborhood : {viewest.neighborhood} <br />  </h3>
                  <h4>Address : {viewest.address} <br /></h4>
                  <RestuarentOpration oprate = {viewest.operating_hours} /> <br/><br/>
                  <RestuarentReview reviews = {viewest.reviews} />

                </Col>
            </Row>
        ):'null'
    }
    </>
  )
}

export default ViewRestuarent