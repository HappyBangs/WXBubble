import React from 'react';
import { CardType } from '../../../../../mock/types';
import ImageCard from './ImageCard';
import TextCard from './TextCard';

const Map = {
  [CardType.Image]: ImageCard,
  [CardType.Text]: TextCard
};

const unknowData = {text: '[未知消息类型]'};

export default (type, data) => {
  const MessageCard = Map[type];
  if (!MessageCard) return <TextCard data={unknowData} />;

  return <MessageCard data={data} />;
}