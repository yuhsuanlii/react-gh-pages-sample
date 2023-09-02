/* eslint-disable no-unused-vars */
import { useState } from "react"
import { Link } from "react-router-dom";

const data = [
    {
        id: 1,
        name: "珍珠奶茶",
        description: "香濃奶茶搭配QQ珍珠",
        price: 50,
        quantity: 20
    },
    {
        id: 2,
        name: "冬瓜檸檬",
        description: "清新冬瓜配上新鮮檸檬",
        price: 45,
        quantity: 18
    },
    {
        id: 3,
        name: "翡翠檸檬",
        description: "綠茶與檸檬的完美結合",
        price: 55,
        quantity: 34
    },
    {
        id: 4,
        name: "四季春茶",
        description: "香醇四季春茶，回甘無比",
        price: 45,
        quantity: 10
    },
    {
        id: 5,
        name: "阿薩姆奶茶",
        description: "阿薩姆紅茶搭配香醇鮮奶",
        price: 50,
        quantity: 25
    },
    {
        id: 6,
        name: "檸檬冰茶",
        description: "檸檬與冰茶的清新組合",
        price: 45,
        quantity: 20
    },
    {
        id: 7,
        name: "芒果綠茶",
        description: "芒果與綠茶的獨特風味",
        price: 55,
        quantity: 18
    },
    {
        id: 8,
        name: "抹茶拿鐵",
        description: "抹茶與鮮奶的絕配",
        price: 60,
        quantity: 20
    },
]

const First = () => {

    const [cup, setCup] = useState(data);
    const [edit, setEdit] = useState(false);
    const [category, setCategory] = useState('品項');

    const handleMinus = (itemId) => {
        setCup((prevCup) =>
            prevCup.map((item) =>
                item.id === itemId
                    ? { ...item, quantity: Math.max(0, item.quantity - 1) }
                    : item
            )
        );
    };

    const handleAdd = (itemId) => {
        setCup((prevCup) =>
            prevCup.map((item) =>
                item.id === itemId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    return (
        <>
            <div style={{ 'padding': '10px 30px' }}>
                <Link to={'/'}>回到首頁</Link>
            </div>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th scope="col">品項</th>
                        <th scope="col">描述</th>
                        <th scope="col">價格</th>
                        <th scope="col">庫存</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cup.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td><small>{item.description}</small></td>
                                    <td>{item.price}</td>
                                    <td>
                                        <button onClick={() => handleMinus(item.id)}>-</button>
                                        {item.quantity}
                                        <button onClick={() => handleAdd(item.id)}>+</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table >
        </>
    )
}
export default First;