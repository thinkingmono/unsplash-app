import { useQuery } from "@tanstack/react-query"
import authFetch from "../utils/custom"
import { useGlobalContext } from "../utils/context";

const Gallery = () => {
  const { searchValue } = useGlobalContext();

  const { isLoading, error, data } = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      const { data } = await authFetch.get(`page=1&per_page=20&query=${searchValue}`);
      return data;
    }
  })

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error.response.data.msg}</p>
  }

  return (
    <div className="image-container">
      {data && data.results.map((image) => {
        const { id, alt_description, urls } = image;
        return <img key={id} src={urls.regular} alt={alt_description} className="img" />
      })}
    </div>
  )
}

export default Gallery