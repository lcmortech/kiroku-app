

//Returns search results from API array
const searchTitle = ()=>{
    console.log('works')
}

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