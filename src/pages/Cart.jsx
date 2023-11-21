import { useState } from "react"
import { useOutletContext } from "react-router-dom"


function CartCard({Product})
{
    return(

        <div className="purchaseCard">

        <img src={Product.image} alt="" className="purchasePicture" />
        <div className="quantityContainer">
            <h2>{Product.price + "$"}</h2>

            <div className="quantityBody">
                <h4 className="quantityText">Quantity:</h4>
                <p className="quantity">1</p>
            </div>

        </div>

    </div>
        
    )
}

function Cart()
{
    const ballActive = 
    {
        borderColor: "Black"
    }
    const buttonDisabled =
    {
        visibility: "hidden"
    }
    const {
    items:[itemsInCart,setItemsInCart],
    moneyData:[money,setMoney],
    product:[ProductData,setProductData],
    boughtProduct:[boughtProducts,setBoughtProducts]} = useOutletContext()

    const [selectedAll,setSelectedAll] = useState(false)

    function resetData()
    {
        setMoney(0)
        setItemsInCart(0)
        setBoughtProducts([])
    }

    return(
    <div className="cartBody">

        <div className="purchasesBody">

            <div className="purchaseTop">

                <h2 className="purchaseHeader">Total Products {"("+itemsInCart+")"}</h2>

                <div className="selectOptions">

                    <div className="Selected">
                        <div style={selectedAll === false ? ballActive: null} onClick={()=>{setSelectedAll(!selectedAll)}} className="SelectedBall"></div>
                        <p className="selectText">Select All items</p>
                    </div>
                    <button style={selectedAll === false ? buttonDisabled: null} onClick={resetData} className="deleteAll">Clear selected items</button>

                </div>

            </div>
            
            <div className="purchaseBottom">

                {boughtProducts.map((product)=>{
                    return <CartCard key={product.id} Product = {product}/>
                })}

            </div>

        </div>

        <div className="priceShow">

        <h2>Total Price</h2>
        <div className="priceCalc">

            <div className="priceBox">
                <p className="priceText">Subtotal:</p>
                <h3 className="total">{Math.round(money)+"$"}</h3>
            </div>
            <div className="priceBox">
                <p className="priceText">Shipping:</p>
                <h3 className="total">Free!</h3>
            </div>
            <div className="priceBox">
                <p className="priceText">Saved:</p>
                <h3 className="total">0$</h3>
            </div>
            <div className="priceBox">
                <p className="priceText totalPay">Total:</p>
                <h3 className="total totalSum">{Math.round(money) +"$"}</h3>
            </div>

        </div>
        <button className="confirmPay">Pay</button>

        </div>

    </div>
    )
}

export default Cart