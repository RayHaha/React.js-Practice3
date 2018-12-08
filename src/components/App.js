import React from 'react';
import unsplash from '../api/unsplash';
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
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
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