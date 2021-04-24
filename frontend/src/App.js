import './App.css';
import data from './data'
import Products from './components/Products'

const addProd = data.products.map((product) => (
                    <Products key={product._id} product={product}/>
                ))

const App = () => {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">amazon</a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {addProd}
        </div>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
  );
}

export default App;
