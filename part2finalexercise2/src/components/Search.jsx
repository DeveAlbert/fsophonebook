const Search = ({search, enterSearch, res, searchName}) => {

   return (
    <div>
        filter: <input value={searchName} onChange={enterSearch} onClick={search} />

        <p>{res}</p>
    </div>
   ) 
    
}

export default Search