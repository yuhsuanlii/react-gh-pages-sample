/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

const CartList = ({ cart, setCart, setOrder }) => {

    const [sum, setSum] = useState(0)
    const [description, setDescription] = useState('')

    const updateCart = (item, value) => {
        const newCart = cart.map((cartItem) => {
            if (cartItem.id === item.id) {
                return {
                    ...cartItem,
                    quantity: parseInt(value),
                    subtotal: cartItem.price * parseInt(value)
                }
            }
            return cartItem
        })
        setCart(newCart)
    }

    const createOrder = () => {
        setOrder({
            id: new Date().getTime(),
            cart,
            description,
            sum
        })
        setCart([])
        setDescription('')
    }

    useEffect(() => {
        console.log(cart);
        const total = cart.reduce((pre, next) => {
            return pre + next.price * next.quantity
        }, 0)
        setSum(total)
    }, [cart])

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope='col' width="50">操作</th>
                        <th scope="col">品項</th>
                        <th scope="col">描述</th>
                        <th scope='col' width="90">數量</th>
                        <th scope="col">單價</th>
                        <th scope="col">小計</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => {
                        return (<tr key={item.id}>
                            <td><button type="button" className='btn btn-sm' onClick={() => {
                                const newCart = cart.filter((cartItem) => {
                                    return cartItem.id !== item.id
                                })
                                setCart(newCart)
                            }}>x</button></td>
                            <td>{item.name}</td>
                            <td><small>{item.description}</small></td>
                            <td>
                                <select className="form-select" value={item.quantity} onChange={(e) => {
                                    const value = e.target.value;
                                    updateCart(item, value);
                                }}>
                                    {[...Array(10).keys()].map((item) => {
                                        return (<option value={item + 1} key={item}>{item + 1}</option>)
                                    })}
                                </select>
                            </td>
                            <td>{item.price}</td>
                            <td>{item.subtotal}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
            {
                cart.length === 0 ? <div className="alert alert-primary text-center" role="alert">
                    請選擇商品
                </div> : (<><div className="text-end mb-3">
                    <h5>總計: <span>${sum}</span></h5>
                </div>
                    <textarea className="form-control mb-3" rows="3" placeholder="備註"
                        onChange={(e) => {
                            setDescription(e.target.value)
                        }}></textarea>
                    <div className='text-end'>
                        <button className="btn btn-primary" onClick={(e) => {
                            e.preventDefault()
                            createOrder()
                        }}>送出</button>
                    </div>
                </>)
            }
        </>
    )
}

export default CartList;