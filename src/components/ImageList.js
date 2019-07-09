import React from "react";
import ImageCard from "./ImageCard";
import './image-list.css';

const ImageList=(props)=>{
const picture=props.images.map((image)=>{
      return <ImageCard key={image.id} image={image} />
    })

    return<div className="image-list">{picture}</div>

}
export default ImageList;