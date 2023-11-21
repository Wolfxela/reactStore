import { useState } from "react"
import { useOutletContext } from "react-router-dom"


function Cart()
{
    const {
    items:[itemsInCart,setItemsInCart],
    moneyData:[money,setMoney],
    product:[ProductData,setProductData]} = useOutletContext()

    const [selectedAll,setSelectedAll] = useState(false)

    function resetData()
    {
        setMoney(0)
        setItemsInCart(0)
    }
    return(
    <div className="cartBody">

        <div className="purchasesBody">

            <div className="purchaseTop">

                <h2 className="purchaseHeader">Total Products {"("+itemsInCart+")"}</h2>

                <div className="selectOptions">

                    <div className="Selected">
                        <div className="SelectedBall"></div>
                        <p className="selectText">Select All items</p>
                    </div>
                    <button onClick={resetData} className="deleteAll">Clear selected items</button>

                </div>

            </div>
            <div className="purchaseBottom"></div>

        </div>

        <div className="priceShow">

        <h2>Total Price</h2>
        <div className="priceCalc">

            <div className="priceBox">
                <p className="priceText">Subtotal:</p>
                <h3 className="total">10$</h3>
            </div>
            <div className="priceBox">
                <p className="priceText">Shipping:</p>
                <h3 className="total">Free:3</h3>
            </div>
            <div className="priceBox">
                <p className="priceText">Saved:</p>
                <h3 className="total">0$</h3>
            </div>
            <div className="priceBox">
                <p className="priceText totalPay">Total:</p>
                <h3 className="total totalSum">10$</h3>
            </div>

        </div>
        <button className="confirmPay">Pay</button>

        </div>

    </div>
    )
}

export default Cart