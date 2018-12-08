import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

// refactor function based App to a class based component
// so we can use the function onSearchSubmit to get callback from children
class App extends React.Component{
    // handling request with async await
    // axios.get will need to wait until the result get back so we use the async way to run
    async onSearchSubmit(term){
        // use axios.get to search the photos
        // the first argument is the address
        // the second argument is an object that will have a bunch of options that will custimize this request
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID 2d5b213c5d7a96abf39c7ed377fc99af033cf497a6610cf5dd94b5150cf445ef'
            }
        });

        console.log(response);
    }
    // we can also write in this way
    /**
    onSearchSubmit(term){
        axios.get('', {

        }).then((response) => {
            console.log(response);
        });
    }
    */

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