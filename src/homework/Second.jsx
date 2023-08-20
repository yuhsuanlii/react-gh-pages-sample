import 'bootstrap/scss/bootstrap.scss'
import { useState } from 'react';
import MenuList from '../components/MenuList';
import OrderList from '../components/OrderList';
import CartList from '../components/CartList';


function Second() {
    const [cart, setCart] = useState([])
    const [order, setOrder] = useState({})

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <MenuList cart={cart} setCart={setCart} />
                </div>
                <div className="col-md-8">
                    <CartList cart={cart} setCart={setCart} setOrder={setOrder} />
                </div>
            </div>
            <hr />
            <div className="row justify-content-center">
                <div className="col-8">
                    <OrderList order={order} setOrder={setOrder} />
                </div>
            </div>
        </div>
    )
}

export default Second;