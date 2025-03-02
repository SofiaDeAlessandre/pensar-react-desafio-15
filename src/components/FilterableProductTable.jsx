import ProductTable from "./ProductTable"
import SearchBar from "./SearchBar"

const FilterableProductTable = ({PRODUCTS}) => {
  return (
    <div>
    <SearchBar/>
    <ProductTable products={PRODUCTS}/>
    </div>
  )
}

export default FilterableProductTable