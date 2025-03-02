const SearchBar = () => {
  return (
    <>
        <form className="bg-white border rounded-lg p-6">
          <input
            className="p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Buscar..."
          ></input>
          <label>
            <input type="checkbox"/>
            {' '}
            Mostrar solo productos en stock
          </label>
        </form>
    </>
  );
};

export default SearchBar;
