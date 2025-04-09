const SearchBar = ({ onChange, onSearch }) => {
  // add isLoading check to disable button when data is loading
  const isLoading = false;
  // add onChange for user input
  // add onSearch for search button
  return (
    <>
      <input
        type="text"
        placeholder="Search products..."
        className="form-control my-2"
        onChange={(event) => onChange(event.target.value)}
      ></input>
      {isLoading ? (
        <button type="button" className="btn btn-outline-primary m-2">
          Loading
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-outline-primary m-2"
          onClick={onSearch}
        >
          Search
        </button>
      )}
    </>
  );
};

export default SearchBar;
