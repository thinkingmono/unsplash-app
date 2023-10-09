import { useGlobalContext } from "../utils/context"

const SearchForm = () => {
  const { setSearchValue } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchTerm = e.target.elements.search.value;
    if(!searchTerm) return
    setSearchValue(searchTerm);
  }
  return (
    <>
      <h1 className="title">Unsplash Images</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input type="text" name="search" id="search" placeholder="developer" className="form-input search-input" />
        <button type="submit" className="btn">Search</button>
      </form>
    </>
  )
}

export default SearchForm