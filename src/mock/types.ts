/* 聊天类型 */
export enum BubbleType {
  Single, // 单聊
  Group // 群聊
};
/* 卡片类型 */
export enum CardType {
  Image,
  Text
};
/* 消息性质 */
export enum MsgType {
  Talk, // 聊天消息
  System // 系统消息
};

/* IM消息列表模型：非系统消息（聊天消息） */
export interface TalkMsgItem {
  id: number,
  type: MsgType.Talk,
  cardType: CardType,
  serverTime: number
  body: {
    text?: string,
    imgUrl?: string,
    html?: string
  },
  to: {
    userId: number,
    name: string,
    avatar: string
  },
  from: {
    userId: number,
    name: string,
    avatar: string
  }
};

/* IM消息列表模型：系统消息 */
export interface SystemMsgItem {
  id: number,
  type: MsgType.System,
  serverTime: number
  body: {
    text: string
  }
};