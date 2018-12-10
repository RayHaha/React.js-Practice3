import React from 'react';

class ImageCard extends React.Component{
    render(){
        // because that we'll refer to this.props.image so many times
        // so we can use the same way in ImageList
        const { description, urls} = this.props.image;
        // this means that description and urls are from this.props.image

        return (
            <div>
                <img 
                    alt={description}
                    src={urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;