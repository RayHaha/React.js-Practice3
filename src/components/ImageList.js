import './ImageList.css';
import React from 'react';

const ImageList = (props) => {
    // use map method to create a new component
    // it means every image(= this.state.images = response.data.results) from props
    // will be map to the img tag
    // which src=image.urls.regular(= response.data.results.urls.regular)
    // const images = props.images.map((image) => {
    //     // we only have to assign the key to the root element that we return
    //     // if there is <div> then it'll be <div key={}>
    //     return <img alt={image.description} key={image.id} src={image.urls.regular} />;
    // });
    // we can also write in this way
    const images = props.images.map(({ description, id, urls}) => {
        return <img alt={description} key={id} src={urls.regular} />;
    });

    return <div className="image-list">{images}</div>;
}

export default ImageList;