import { SearchButton } from "../pages/Movies/Movies.styled"
import { useSearchParams } from "react-router-dom";

export const Searchbar = ({handleSubmit, searchValue}) => {

    const [searchParams, setSearchParams] = useSearchParams();
    const movieId = searchParams.get(`movieId`) ?? "";

    const handleSubmitForm = e => {
        e.preventDefault();
        
        if (movieId.trim() === '')
            return alert('The field cannot be empty. Please enter a search query')
        if (movieId.trim().toLowerCase() === searchValue.trim().toLowerCase()) return alert('The query cannot be empty same')

        handleSubmit(movieId);
    }

    const handleChange = e => {
        const inputValue = e.currentTarget.value;
        if (inputValue === '') return setSearchParams({})
        setSearchParams({ movieId: inputValue })
    }

    return (
            <form onSubmit={handleSubmitForm}>
                <input
                    onChange={handleChange}
                    type="text"
                    value={movieId}
                />
                <SearchButton type="submit">Search</SearchButton>
            </form>
    )
}

export default Searchbar