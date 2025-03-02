import ProductCategoryRow from "./ProductCategoryRow"
import ProductRow from "./ProductRow";



const ProductTable = ({PRODUCTS}) => {
    const rows = [];
    let lastCategory = null;

    PRODUCTS?.foreach((product) => {
        if(product.category !== lastCategory){
            rows.push(
                <ProductCategoryRow
                category = {product.category}
                key={product.category}
                />
            );
        }
    
    rows.push(
        <ProductRow
        product={product}
        key={product.name}/>
    )
    lastCategory = product.category
});

  return (
    
    <table className="w-lg text-sm text-left text-gray-500 mx-auto">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200">
        <tr>
            <th className="px-6 py-3">Nombre</th>
            <th>Precio</th>
        </tr>
        </thead>
        <tbody>{rows}</tbody>
    <ProductCategoryRow/>
    <ProductCategoryRow/>
   </table>
    
  )
}

export default ProductTable