import React ,{ useState } from 'react'
import { NavItem } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function RestuarentReview({reviews}) {
    const [open, setOpen] = useState(false);
   
  return (
   <>
    <Button variant="dark"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click to see Review
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: '400px' }}>
             {
                reviews.map(item=>(
                    <div>
                        <h5>{item.name} <span>{item.date}</span> </h5>
                        <h4>Rating : {item.rating}</h4>
                        <p>{item.comments}</p>
                    </div>
                ))
                    
                }
             
            </Card>
          </div>
        </Collapse>
      </div>
  </>
  )
}

export default RestuarentReview