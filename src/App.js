import './App.css';
import {useState} from "react"

import MenuContainer from "./components/MenuContainer"
import Cart from "./components/Cart"


function App() {

  const [products, setProducts] = useState([
    { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 14.00, img: 'https://i.ibb.co/fpVHnZL/hamburguer.png' },
    { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 16.00, img: 'https://i.ibb.co/djbw6LV/x-burgue.png' },
    { id: 3, name: 'Big Kenzie', category: 'Sanduíches', price: 18.00, img: 'https://i.ibb.co/FYBKCwn/big-kenzie.png' },
    { id: 4, name: 'Fanta Guaraná', category: 'Bebidas', price: 5.00, img: 'https://i.ibb.co/cCjqmPM/fanta-guarana.png' },
    { id: 5, name: 'Coca', category: 'Bebidas', price: 4.99, img:'https://i.ibb.co/fxCGP7k/coca-cola.png' },
    { id: 6, name: 'McShake Ovomaltine', category: 'Bebidas', price: 4.99, img: 'https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png' },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([])
  const [currentSale, setCurrentSale] = useState([])
  const [cartTotal, setCartTotal] = useState(0)
  const [userInput, setUserInput] = useState("")

  const handleClick = (productId) => {
    products.map((item) => {
      if(productId === item.id)
      {
        // SE, O PRODUTO ESTIVER NO CURRENTSALE, NÃO PODE ADICIONAR
        if(currentSale.includes(item.id))
        {
          window.alert("Produto já adicionado!")
        }
          else
          {
            setCurrentSale([...currentSale, item.id])
            setCartTotal(cartTotal + item.price)
          }
      }
    })
  }

  return (
    <div className="App">
      <div className="blackBar"></div>
      <header>
        <div className="content">
          <div className="shopTitle">
            <h1><span className="burguer">Burguer</span> <span className="kenzie">Kenzie</span></h1>
          </div>
          <div className="searchBox">
            <input type="text" placeholder="Digitar Pesquisa" value={userInput} onChange={(event) => setUserInput(event.target.value)}></input>
            {/* <button>Pesquisar</button> */}
          </div>
        </div>
      </header>

      <main>
        <div className="products">
          <MenuContainer products={products} handleClick={handleClick} userInput={userInput}/>
        </div>
        <div className="cart">
          <div className="title">
            <h1>Carrinho de Compras</h1>
          </div>
          <>
            <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} setCartTotal={setCartTotal} cartTotal={cartTotal} products={products}/>
          </>
        </div>
      </main>
    </div>
  );
}

export default App;
