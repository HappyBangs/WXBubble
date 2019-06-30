import React from 'react';
import './index.scss';

const ImageCard: React.FunctionComponent<{
  data: {
    imgUrl?: string
  }
}> = ({ data: {imgUrl } }) => {
  return <img className="img-card" src={imgUrl} />
};

export default ImageCard;