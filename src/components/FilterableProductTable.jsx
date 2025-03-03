import ProductTable from "./ProductTable"
import SearchBar from "./SearchBar"
import { useState } from "react";

const FilterableProductTable = ({products}) => {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    
    const inStockProducts = products.filter(
        (product) =>
          (!inStockOnly || product.stocked) && 
          product.name.toLowerCase().includes(filterText.toLowerCase()) 
      );
      const countInStock = inStockProducts.length;
  
    return (
      <div>
        
        <SearchBar 
          filterText={filterText} 
          inStockOnly={inStockOnly} 
          onFilterTextChange={setFilterText} 
          onInStockOnlyChange={setInStockOnly} />
        <ProductTable 
          products={products} 
          filterText={filterText}
          inStockOnly={inStockOnly} />
          <h3 className="text-center m-5">{`Productos: ${countInStock}`}</h3>
      </div>
    );
  }
  

export default FilterableProductTable