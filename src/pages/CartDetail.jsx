import Offcanvas from 'react-bootstrap/Offcanvas';
import { useSelector, useDispatch } from 'react-redux'
import { userName } from '../redux/slices/userSlice.js'
import { DisplayCartProducts } from '../redux/slices/productSlice.js'
import { MdCancel } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { removeItem, incrementItenCounter, decrementItenCounter } from '../redux/slices/productSlice.js'


const CartDetail = ({ show, onHide }) => {


    let dispatch = useDispatch();
    let user = useSelector(userName);
    let cartItems = useSelector(DisplayCartProducts);
    let cartTotalAmount = 0;
    cartItems.map((item) => {
        return cartTotalAmount+=(item.price*item.quantity);
    })

    return (
        <Offcanvas show={show} onHide={onHide} placement='end' style={{ width: 'auto' }}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>{`${user}'s`} Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {
                    cartItems.map((item) => {
                        return <div key={item.id} className='rounded mb-3 shadow p-1 bg-light text-dark' style={{ backgroundColor: "yellow" }}>
                            <div className='row'>
                                <div className='col'>
                                    <img src={item.image} alt={item.caterory} className='rounded' style={{
                                        height: '100px',
                                        width: '100px'
                                    }} />
                                </div>
                                <div className='col-8'>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <div><b>Item:</b> {item.title}.</div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div >
                                                <span className="badge" style={{ backgroundColor: '#491d90' }}>{item.category}</span>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4px' }}>
                                                <div id='counterBtn'>
                                                    <MdKeyboardDoubleArrowLeft onClick={() => dispatch(decrementItenCounter(item.id))} />
                                                </div>
                                                <div>
                                                    {item.quantity}
                                                </div>
                                                <div id='counterBtn' onClick={() => dispatch(incrementItenCounter(item.id))}>
                                                    <MdKeyboardDoubleArrowRight />
                                                </div>
                                            </div>
                                        </div>
                                        <hr style={{ color: '#491d90' }} />
                                        <h6>${item.price * item.quantity}</h6>
                                    </div>
                                </div>
                                <div className='col-1' onClick={() => dispatch(removeItem(item.id))}>
                                    <MdCancel style={{ color: '#491d90', cursor: 'pointer' }} />
                                </div>
                            </div>
                        </div>
                    })
                }
            </Offcanvas.Body>
            <div style={{width:'100%', backgroundColor:'#491d90', padding:'10px', color:'white', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <div>
                    <h4>Total Amount: ${cartTotalAmount.toFixed(2)}</h4>
                </div>
                <div>
                <button type="button" class="btn btn-light"><b>Checkout</b></button>
                </div>
            </div>
        </Offcanvas>
    )
}

export default CartDetail
