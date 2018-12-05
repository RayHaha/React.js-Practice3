import React from 'react';

class SearchBar extends React.Component{
    // this function get called everytime someome changes the text inside the input
    // the name of the callback does not make a difference, you can use every name you want
    // and call by onChange
    OnInputChange(event){
        // we'll get the input by event.target.value
        console.log(event.target.value);
    }

    render(){
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        {/** OnInputChange is a callback function but we don't use OnInputChange() here */}
                        {/** because it will call the function everytime when render() is called */}
                        <input type="text" onChange={this.OnInputChange} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;