import React from "react";

class SearchBar extends React.Component{
    state={term:""}
    SubmitForm=(event)=>{
        event.preventDefault();
        this.props.submit(this.state.term);
    }
   
    render(){
        return(
        <div className="ui segment">
                <form onSubmit={this.SubmitForm} className="ui form container">
                    <div className="field  ui ">
                        <label>Search for Images </label>
                        <input className="ui inverted green button" onClick={(e) => this.setState({ term: e.target.value })} value="Trees" type="button"/>
                        <input className="ui inverted red button" onClick={(e) => this.setState({ term: e.target.value })} value="Cars" type="button" />
                        <input style={{ color:"black" }} className="ui inverted grey button" onClick={(e) => this.setState({ term: e.target.value })} value="Mountains" type="button" />
                        <input className="ui inverted teal button" onClick={(e) => this.setState({ term: e.target.value })} value="Oceans" type="button" />
                        <input className="ui inverted blue button" onClick={(e) => this.setState({ term: e.target.value })} value="Rivers" type="button" />
                        <input className="ui inverted orange button" onClick={(e) => this.setState({ term: e.target.value })} value="Sunset" type="button" />
                        <input className="ui inverted yellow button" onClick={(e) => this.setState({ term: e.target.value })} value="Flowers" type="button" />
                        <input className="ui black button" onClick={(e) => this.setState({ term: e.target.value })} value="New Zealand" type="button" />
                        <br /><br />
                        <div className="ui action input">
                            <input value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} type="text" placeholder="Search..."/>
                            <button className="ui green button">Search</button>
                        </div>
            </div>
            </form>
        </div>
        );
    }
}
export default SearchBar;