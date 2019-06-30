import React from 'react';
import './index.scss';

export default (props) => {
  return <div className="system-container">系统消息：{ props.data.body.text }</div>
};