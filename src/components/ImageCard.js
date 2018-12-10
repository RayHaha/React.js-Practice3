import React from 'react';

class ImageCard extends React.Component{
    constructor(props){
        super(props);

        // initialize state
        this.state = { spans: 0 };

        // create a reference
        this.imageRef = React.createRef();
    }

    // use componentDidMount to run only one time to get the information of clientHeight
    componentDidMount(){
        // use the addEventListener with callback function or it'll run before the image be loaded
        // and it'll get the value 0, set the callback function named setSpans
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    // make it an arrow function to bind the "this"
    setSpans = () => {
        // get height then count span
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        // use state to store the span 
        this.setState({ spans });   // equal to this.setState({ spans: spans });
    }

    render(){
        // because that we'll refer to this.props.image so many times
        // so we can use the same way in ImageList
        const { description, urls} = this.props.image;
        // this means that description and urls are from this.props.image

        // send spans here
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
                {/** then send imageRef here */}
                <img 
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;