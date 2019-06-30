import React from 'react';
import { BasicDataConsumer } from '../../../../pages/Bubble';
import { TalkMsgItem, BubbleType } from '../../../../mock/types';
import messageCardFactory from'./components/messageCardFactory';
import './index.scss';

const TalkContainer: React.FunctionComponent<{
  data: TalkMsgItem,
}> = ({ data }) => {
  const { from, body, cardType } = data;
  const MessageCard = messageCardFactory(cardType, body);

  return (
    <BasicDataConsumer>
      {({ myUserId, bubbleType }) => {
        return (
          <div className={`talk-container${from.userId === myUserId ? ' is-mine' : ''}`}>
            <div className="avatar-wrapper">
              <img className="avatar-img" src={from.avatar} />
            </div>
            <div className="bubble-content-wrapper">
              {bubbleType === BubbleType.Group && ( // 群聊才需要展示昵称
                <div className="nick-name">{from.name}</div>
              )}
              <div className="bubble-content">
                { MessageCard }
              </div>
            </div>
          </div>
        )
      }}
    </BasicDataConsumer>
  )
};

export default TalkContainer;