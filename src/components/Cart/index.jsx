import "./style.css"

const Cart = ({currentSale, setCurrentSale, setCartTotal, cartTotal, products}) => {

    const removeAllProducts = () => {
        products.map((item) => {
            setCartTotal(0)
            setCurrentSale([])
        })
    }
    
    const removeProduct = (productId, productPrice) => {
        setCurrentSale(currentSale.filter((item) => item != productId))
        setCartTotal(cartTotal - productPrice)
    }

    return(
        <div className="purchases">
            {
                currentSale !== undefined || currentSale !== null ? 
                <>
                    <span>
                        {
                            products.map((item) => (
                                currentSale.includes(item.id) ? 
                                <>
                                <div className="newProduct">
                                    <div className="productImg">
                                        <img src={item.img} alt={item.name}/>
                                    </div>
                                    <div className="productsSeparate">
                                        <div className="productsInfo">
                                            <div className="productTitle">
                                                <p>{item.name}</p>
                                            </div>
                                            <div className="productCategory">
                                                <p>{item.category}</p>
                                            </div>
                                        </div>
                                        <div className="remove">
                                            <button onClick={() => removeProduct(item.id, item.price)}>Remover</button>
                                        </div>
                                    </div>
                                </div>
                                </>
                                : 
                                <span></span>
                            ))
                        }
                    </span> 
                    <span className="totalPrice">
                        <span className="total">
                            Total 
                        </span>
                        <span className="finalPrice">R${cartTotal.toFixed(2)}</span>
                    </span>
                    <span className="buttonRemoveAll">
                        <button onClick={removeAllProducts}>Remover Todos</button>
                    </span>
                </>
                :
                <span>Vazio</span>   
            }
        </div>
    )
}

export default Cart