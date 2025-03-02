
const SearchBar = () => {
  return (
    <>
    <div className="grid gap-4 m-10 ">
    <form className="bg-white border rounded-lg p-6 mx-auto" >
       <input className="p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Search..."></input> 
       <div>
       <input type="checkbox"></input>
       <p>Only show products in stock</p>
       </div>
       
       </form>
       </div>
        </>
  )
}

export default SearchBar