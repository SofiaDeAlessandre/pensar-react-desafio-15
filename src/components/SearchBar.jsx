const SearchBar = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) => {
  return (
    <>
      <form className="w-lg bg-white border rounded-lg p-6 flex flex-col mx-auto m-10">
        <input
          className=" p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Buscar..."
          value={filterText}
          onChange={(e) => onFilterTextChange(e.target.value)}
        ></input>
        <label>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => onInStockOnlyChange(e.target.checked)}
          />{" "}
          Mostrar solo productos en stock
        </label>
      </form>
    </>
  );
};

export default SearchBar;
