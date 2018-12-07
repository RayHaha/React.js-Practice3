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

    // use the same way that the function OnInputChange used to be to handle submit
    // if we don't use the arrow function here, "this" is going to be undefined
    // arrow function automatically bind the value of "this" for all the code inside the function
    onFromSubmit = (event) => {
        // don't let the form to attempt to submit itself and thus refresh the page
        event.preventDefault();

        // now the value of "this" has already bind
        // the different between using props in function based component and class based component is this.props
        this.props.onSubmit(this.state.term);
    }

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFromSubmit} className="ui form">
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