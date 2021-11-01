const Product = ({item, handleClick}) => {
    return (
        <>
            <div className="productImg">
                <img src={item.img} alt={item.name}/>
            </div>
            <div className="productsInfo">
                <div className="productTitle">
                    <p>{item.name}</p>
                </div>
                <div className="productCategory">
                    <p>{item.category}</p>
                </div>
                <div className="productPrice">
                    <p>R${item.price.toFixed(2)}</p>
                </div>
                <button onClick={() => handleClick(item.id)}>Adicionar</button>
            </div>
        </>
    )
}

export default Product