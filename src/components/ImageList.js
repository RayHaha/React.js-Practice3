import React from 'react';

const ImageList = (props) => {
    // use map method to create a new component
    // it means every image(= this.state.images = response.data.results) from props
    // will be map to the img tag
    // which src=image.urls.regular(= response.data.results.urls.regular)
    const images = props.images.map((image) => {
        return <img src={image.urls.regular} />;
    });
    return <div>{images}</div>;
}

export default ImageList;