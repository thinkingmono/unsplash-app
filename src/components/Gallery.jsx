import { useQuery } from "@tanstack/react-query"
import axios from "axios";
import { useGlobalContext } from "../utils/context";
const url = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}`;

const Gallery = () => {
  const { searchValue } = useGlobalContext();

  const response = useQuery({
    queryKey: ['images', searchValue],
    queryFn: async () => {
      const {data} = await axios.get(`${url}&query=${searchValue}`);
      return data;
    }
  })

  if (response.isLoading) {
    return <section className="image-container">
      <p>Loading...</p>
    </section>
  }

  if (response.error) {
    return <section className="image-container">
      <p>{error.response.data.msg}</p>
    </section>
  }

  const results = response.data.results;
  if (results.length < 1){
    return <section className="image-container">
      <p>There are no images for that query</p>
    </section>
  }

    return (
      <section className="image-container">
        {results.map((image) => {
          const { id, alt_description, urls } = image;
          return <img key={id} src={urls.regular} alt={alt_description} className="img" />
        })}
      </section>
    )
}

export default Gallery