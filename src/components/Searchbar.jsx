import { useState } from "react";
import { SearchButton } from "../pages/Movies/Movies.styled"

export const Searchbar = ({handleSubmit}) => {
    const [searchValue, setSearchValue] = useState('')
    
    const handleChange = e => {
        const inputValue = e.currentTarget.value;
        setSearchValue(inputValue.trim())
    }

    const handleSubmitForm = e => {
        e.preventDefault();
        
        if (!searchValue) return
        handleSubmit(searchValue);
    }

    return (
            <form onSubmit={handleSubmitForm}>
                <input
                    onChange={handleChange}
                    type="text"
                />
                <SearchButton type="submit">Search</SearchButton>
            </form>
    )
}

export default Searchbar