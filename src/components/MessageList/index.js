import React from 'react';
import moment from 'moment';
import { MsgType } from '../../mock/types.ts';
import SystemContainer from './components/SystemContainer';
import TalkContainer from './components/TalkContainer/index.tsx';
import './index.scss';

export default (props) => {
  const { data: msgListData } = props;
  // 间隔大于15分钟就展示时间
  const getIsShowTime =
    (msg, index) => (index === 0 || (msgListData[index - 1].serverTime - msg.serverTime > 15 * 1000));

  return (
    <div className="message-list" >
      {msgListData.map((msg, index) => {
        return (
          <div className="message-item" key={msg.id}>
            {getIsShowTime(msg, index)
              && (<div className="time-str">{moment(msg.serverTime).format('LLL')}</div>)}
            {msg.type === MsgType.System
              ? <SystemContainer data={msg} />
              : <TalkContainer data={msg} />}
          </div>
        )
      })}
    </div>
  );
}