import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/productSlice.js'

const ProductsCard = (props) => {

  const dispatch = useDispatch();

  const { title, image, price, description, category, rating } = props;

  const addItemToCart = () => {
    const item = { ...props };
    dispatch(addItem(item));
  }

  return (
    <Card style={{ width: '18rem', padding: '6px' }} className='shadow'>
      <Card.Img variant="top" src={image} style={{ height: '180px', padding: '4px', objectFit: 'contain' }} />
      <Card.Body>
        <Card.Title>${price}</Card.Title>
        <Card.Subtitle className="my-2 text-muted">
          Rating: {rating.rate}
        </Card.Subtitle>
        <Card.Subtitle className="my-2 text-muted">
          Category: {category}
        </Card.Subtitle>
        <Button id='p-btn' onClick={addItemToCart} style={{ width: '-webkit-fill-available' }} >Add to cart</Button>
      </Card.Body>
    </Card>
  )
}

export default ProductsCard