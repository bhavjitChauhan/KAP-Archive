import SearchForm from "../components/searchForm";
import AddForm from "../components/addForm";
import Program from '../components/program';
import saveAndRetrieve from '../libs/saveAndRetrieve';
const { getProgramsNoString } = saveAndRetrieve;

function Page() {
    const programs = getProgramsNoString(12)
    return (
    <main className="Main">
        <h1>Khan Academy Program Archive</h1>
        <div className="search surface">
            <h2>Search Program</h2>
            <SearchForm />
        </div>
        <div className="add surface">
            <h2>Add Programs</h2>
            <AddForm />
        </div>
        <div className="recently-added">
            <h2>Recently Added</h2>
            <div className="programs-grid">
                {programs.map(program => (
                    <Program {...program}/>
                ))}
            </div>
            <br />
            <a className="button" style={{width: 100+'%',textAlign:'center',margin:'0'}} href="/browse/new">See more</a>
        </div>
    </main>
    );
}

export default Page