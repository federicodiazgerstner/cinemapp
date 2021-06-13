import "./style.css";

function Search(props) {
  function handleChange(e) {
    const { value } = e.target;
    props.handleCallback(value);
  }
  return (
    <input
      className="search"
      type="text"
      name="search"
      placeholder="Search your movie..."
      onChange={handleChange}
    />
  );
}

export default Search;
