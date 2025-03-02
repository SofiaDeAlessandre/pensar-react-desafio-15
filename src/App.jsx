import './App.css'
import FilterableProductTable from './components/FilterableProductTable'
import PRODUCTS from './data/PRODUCTS'

function App() {
   return (
    <>
     <FilterableProductTable products={PRODUCTS}/>
    </>
  )
}

export default App
