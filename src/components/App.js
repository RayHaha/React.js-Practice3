import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

// refactor function based App to a class based component
// so we can use the function onSearchSubmit to get callback from children
class App extends React.Component{
    // initial the state to store the result of axios.get
    state = { images: [] };

    // handling request with async await
    // axios.get will need to wait until the result get back so we use the async way to run
    // we also need to use the arrow function to bind the value of "this" here
    // to solve the problem of "this.setState"
    // so we change the function from async onSearchSubmit(term){ to
    onSearchSubmit = async (term) => {
        // use axios.get to search the photos
        // the first argument is the address
        // the second argument is an object that will have a bunch of options that will custimize this request
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID 2d5b213c5d7a96abf39c7ed377fc99af033cf497a6610cf5dd94b5150cf445ef'
            }
        });

        // console.log(response.data.results);
        // then set the result into state
        // and it'll cause the component to rerender
        this.setState({ images: response.data.results });
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
                {/** output the number of images for test first */}
                Found: {this.state.images.length} images
            </div>
        );
    }
}

export default App;