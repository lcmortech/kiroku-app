

//Returns search results from API array


export default function SearchBar() {
    return(
        <div>
            <form>
                <input type="text" placeholder="Manga Name" />
                <button onClick={searchTitle}>Add</button>
            </form>
        </div>
    )
}