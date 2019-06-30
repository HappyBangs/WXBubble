import React, { useState, useEffect, useRef } from 'react';
import MessageList from '../../components/MessageList';
import { msgListData } from '../../mock/msg';
import { BubbleType } from '../../mock/types';
import './index.scss';

let clickTimes = 0;
const myUserId = 1001; // 数据mock
const BasicDataContext = React.createContext({
  myUserId,
  bubbleType: BubbleType.Group
});

export default () => {
  const [bubbleType, setBubbleType] = useState(BubbleType.Single);
  const [allMsg, setAllMsg] = useState(msgListData);
  const scrollContainer = useRef(null);
  useEffect(() => {
    scrollContainer.current.scrollTop = scrollContainer.current.scrollHeight;
  }, []);

  const handleClickMore = () => {
    // Mock 拉取新数据
    clickTimes = clickTimes + 1;
    console.log(`pull date ${clickTimes} times...`)
    const newAllMsg = [
      ...msgListData.map(msg => ({ ...msg, serverTime: msg.serverTime - 1000 * 24 * 60 * 60 * clickTimes, id: msg.id + 10 * clickTimes })),
      ...allMsg];
    setAllMsg(newAllMsg);
  };

  return (
    <BasicDataContext.Provider value={{ myUserId, bubbleType }}>
      <div className="mock-actions">
        <button className="m-l-xs" onClick={() => setBubbleType(BubbleType.Group)}>切换为群聊</button>
        <button className="m-l-xs" onClick={() => setBubbleType(BubbleType.Single)}>切换为单聊</button>
        <span className="m-l-xs">当前为{bubbleType === BubbleType.Group ? '群聊' : '单聊'}</span>
      </div>

      { /* 正式内容 */ }
      <div className="bubble-page">
        {allMsg && allMsg.length > 0
          ? (
            <div className="message-list-container" ref={scrollContainer}>
              <div className="tips-text" onClick={handleClickMore}>点击查看更多消息</div>
              <MessageList data={allMsg} bubbleType={bubbleType}></MessageList>
            </div>
          )
          : <div className="tips-text">暂时没有新消息</div>
        }
      </div>
    </BasicDataContext.Provider>
  );
}

export const BasicDataConsumer = BasicDataContext.Consumer
