import React from 'react';
import './index.scss';

const TextCard: React.FunctionComponent<{
  data: {
    text?: string
  }
}> = ({ data: { text } }) => {
  if (!text) throw new Error();
  return <div className="text-card">{text}</div>;
};

export default TextCard;