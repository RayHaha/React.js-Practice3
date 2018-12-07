import React from 'react';
import SearchBar from './SearchBar';

// refactor function based App to a class based component
// so we can use the function onSearchSubmit to get callback from children
class App extends React.Component{
    onSearchSubmit(term){
        console.log(term);
    }

    render(){
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                {/** pass onSearchSubmit down to SearchBar as a props */}
                {/** it's okay to change the name of "onSubmit" */}
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;