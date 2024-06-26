const infoIcon = '/assets/info.svg'

function Form() {
	return (
	<form className="search-form" action="/search">
        <div className="inputs-wrapper">
            <div className="inputs-inner-wrapper">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" className="input" placeholder="Program title" title="Title of the program (Not fuzzy yet, however it will match the beginning, middle or end of the title)" />
                <label htmlFor="author">Author</label>
                <input type="text" name="author" className="input" placeholder="Program author's user or nick name" title="The nickname or username of the program author/creator (Not fuzzy yet, however it will match the beginning, middle or end of the name)" />
                <label htmlFor="id">ID</label>
                <input type="text" name="id" className="input" placeholder="Program ID" title="ID of the program" />
            </div>
            <div className="inputs-inner-wrapper search-form-expanded">
                <h3>Votes</h3>
                <label htmlFor="votes_min">Minimum Votes</label>
                <input type="number" name="votes_min" className="input" placeholder="Minimum number of votes" title="Minimum number of votes a program needs to be listed"/>
                <label htmlFor="votes_max">Maximum Votes</label>
                <input type="number" name="votes_max" className="input" placeholder="Maximum number of votes" title="Maximum number of votes a program needs to be listed" />
            </div>
            <div className="inputs-inner-wrapper search-form-expanded">
                <h3>Spin-offs</h3>
                <label htmlFor="spinoffs_min">Minimum Spin-offs</label>
                <input type="number" name="spinoffs_min" className="input" placeholder="Minimum number of Spin-offs" title="Minimum number of spin-offs a program needs to be listed" />
                <label htmlFor="spinoffs_max">Maximum Spin-offs</label>
                <input type="number" name="spinoffs_max" className="input" placeholder="Maximum number of Spin-offs" title="Maximum number of spin-offs a program needs to be listed" />
            </div>
            <div className="inputs-inner-wrapper search-form-expanded" >
                <h3>Created</h3>
                <label htmlFor="created_min">Minimum Created</label>
                <input type="date" name="created_min" className="input" placeholder="Minimum creation date" title="Oldest creation date allowed for a program to be listed" />
                <label htmlFor="created_max">Maximum Created</label>
                <input type="date" name="created_max" className="input" placeholder="Maximum creation date" title="Newest creation date allowed for a program to be listed" />
            </div>
            <div className="inputs-inner-wrapper search-form-expanded">
                <h3>Updated</h3>
                <label htmlFor="updated_min"> Minimum Updated</label>
                <input type="date" name="updated_min" className="input" placeholder="Maximum number of Spin-offs" title="Oldest updated date allowed for a program to be listed" />
                <label htmlFor="updated_max">Maximum Updated</label>
                <input type="date" name="updated_max" className="input" placeholder="Maximum number of Spin-offs" title="Newest updated date allowed for a program to be listed" />
            </div>
            <div className="inputs-inner-wrapper search-form-expanded" >
                <h3>Archive Added</h3>
                <label htmlFor="archive_added_min">Minimum Added</label>
                <input type="date" name="archive_added_min" className="input" placeholder="Minimum archival date" title="Oldest archival date allowed for a program to be listed" />
                <label htmlFor="archive_added_max">Maximum Added</label>
                <input type="date" name="archive_added_max" className="input" placeholder="Maximum archival date" title="Newest archival date allowed for a program to be listed" />
            </div>
            <div className="inputs-inner-wrapper search-form-expanded">
                <h3>Archive Updated</h3>
                <label htmlFor="archive_updated_max"> Minimum Updated</label>
                <input type="date" name="archive_updated_min" className="input" placeholder="Maximum archive update date" title="Oldest archive updated date allowed for a program to be listed" />
                <label htmlFor="archive_updated_max">Maximum Updated</label>
                <input type="date" name="archive_updated_max" className="input" placeholder="Maximum number of Spin-offs" title="Newest archive updated date allowed for a program to be listed" />
            </div>
            <div className="inputs-inner-wrapper search-form-expanded">
                <h3>Other Data</h3>
                <label htmlFor="limit">Limit</label>
                <input type="number" name="limit" className="input" placeholder="Maximum results allowed (default: 50)" title="Maximum number of results allowed; Default is 50; Will not effect raw search" />
            </div>
        </div>
        <button className="button non-primary-button search-form-expander-button" title="Show more fields" type="button">Show Less</button>
            <aside style={{float:"right",opacity:".6"}} >
                <p>I know that this search is too complicated, I will be fixing this later.</p>
            </aside>
        <div className="info">
            <img src={infoIcon} alt="Information Icon" width="22px" height="22px" />
            <p>
                <i>Only one field needs to be filled to search.</i>
            </p>
        </div>
        <hr/>
        <div className="search_search-raw-search_wrapper">
            <div className="left">
                <input type="submit" name="search" value="Search" className="button" title="Search programs graphically" />
            </div>
            <div className="right">
                <input type="submit" name="raw" value="Raw Search" className="button" title="Search by raw JSON" />
            </div>
        </div>
        <script src="/js/searchForm.js"></script>
    </form>)
}

export default Form
