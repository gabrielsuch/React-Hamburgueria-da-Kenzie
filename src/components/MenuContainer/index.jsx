import "./style.css"
import Product from "../Product"

const MenuContainer = ({products, handleClick, newUserInput}) => {
    
    const filtragem = products.filter((item) => {
        return item.category.toLowerCase().startsWith(newUserInput)
    })

    return (
        <>
            <ul>
                {
                    filtragem.map((item) => (
                        <>
                            <li key={item.id}>
                                <Product item={item} handleClick={handleClick}/>
                            </li>
                        </>
                    ))
                }
            </ul>
        </>
    )
}

export default MenuContainer