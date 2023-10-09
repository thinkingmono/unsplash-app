import { useGlobalContext } from "../utils/context"

const SearchForm = () => {
  const {handleSubmit} = useGlobalContext();
  return (
    <>
      <h1 className="title">Unsplash Images</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input type="text" name="search" id="search" placeholder="cat" className="form-input search-input"/>
        <button type="submit" className="btn">Search</button>
      </form>
    </>
  )
}

export default SearchForm