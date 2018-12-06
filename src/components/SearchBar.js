import React from 'react';

class SearchBar extends React.Component{
    // this function get called everytime someome changes the text inside the input
    // the name of the callback does not make a difference, you can use every name you want
    // and call by onChange
    // OnInputChange(event){
    //     // we'll get the input by event.target.value
    //     console.log(event.target.value);
    // }

    // change from uncontrolled elements to controlled elements
    state = { term: '' };

    render(){
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        {/** OnInputChange is a callback function but we don't use OnInputChange() here */}
                        {/** because it will call the function everytime when render() is called */}
                        {/** we could also use a different way that we don't have to define a separate method */}
                        {/** if there is only one line to do in the function */}
                        {/** onChange={(event) => console.log(event.target.value)} */}
                        {/** or abbreviated onChange={(e) => console.log(e.target.value)} */}
                        {/** <input type="text" onChange={this.OnInputChange} /> */}
                        {/** change to controlled elements */}
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={e => this.setState({ term: e.target.value })} 
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;