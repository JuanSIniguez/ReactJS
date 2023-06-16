import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

import shoppingcartpng from "../assets/shoppingcart.png"

export const CartWidget = () => (
    <Button variant="outline-primary" className='d-flex-wrap'>
    <img src={shoppingcartpng} alt="" width="10rem" height="10rem" className='d-flex-wrap'/>
     <Badge bg="secondary">9</Badge>
    </Button>
    
    
     

)