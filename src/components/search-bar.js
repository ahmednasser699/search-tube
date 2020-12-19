import React from 'react';


class SearchBar extends React.Component{
 state={term:''};
 
  onFormSubmit=(e)=>{
    e.preventDefault();
      this.props.onFormSubmit(this.state.term)
     
  }
  render(){
     
  return(
      <div className="ui segment" style={{marginBottom:'15px'}}>
        <form className="ui form" onSubmit={this.onFormSubmit}>
        <div className=" field ten wide">
          <input type='text' placeholder='search' value={this.state.term} onChange={(e)=>this.setState({term:e.target.value})} />
        </div>
        </form> 
        </div>   
    )
}}
export default SearchBar;