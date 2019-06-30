import { MsgType, CardType, TalkMsgItem, SystemMsgItem } from './types';

const MyAvatarUrl = 'https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxgeticon?seq=691971602&username=@9fb54f5b273edd00146826ef08c9bec3&skey=@crypt_50167893_760644ae2867a42a481124136c087a45';
const OtherAvatarUrl = 'https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxgeticon?seq=691977289&username=@a39f03a32fc3493379fa1dbd073a5a9acb14c43b42f1a557a8ad33289b6ac66b&skey=';


/**
 * @description 模拟消息列表
 */
export const msgListData: (TalkMsgItem | SystemMsgItem)[] = [
  {
    id: 1,
    type: MsgType.Talk,
    serverTime: 1561762800000, // 2019/06/29 07:00
    cardType: CardType.Text,
    body: {
      text: '你好'
    },
    to: {
      userId: 1001,
      name: 'Abbey',
      avatar: MyAvatarUrl
    },
    from: {
      userId: 1002,
      name: 'Bob',
      avatar: OtherAvatarUrl
    } 
  },
  {
    id: 2,
    type: MsgType.Talk,
    serverTime: 1561762980000, // 2019/06/29 07:03
    cardType: CardType.Text,
    body: {
      text: '吃了吗？'
    },
    from: {
      userId: 1001,
      name: 'Abbey',
      avatar: MyAvatarUrl
    },
    to: {
      userId: 1002,
      name: 'Bob',
      avatar: OtherAvatarUrl
    } 
  },
  {
    id: 3,
    type: MsgType.Talk,
    serverTime: 1561766580000, // 2019/06/29 08:03
    cardType: CardType.Image,
    body: {
      imgUrl: 'https://user-gold-cdn.xitu.io/2019/6/18/16b69e96f212aaeb'
    },
    from: {
      userId: 1001,
      name: 'Abbey',
      avatar: MyAvatarUrl
    },
    to: {
      userId: 1002,
      name: 'Bob',
      avatar: OtherAvatarUrl
    } 
  },
  {
    id: 4,
    type: MsgType.System,
    serverTime: 1561766581000, // 2019/06/29 08:03:01
    body: {
      text: 'Abbey撤回一条消息'
    }
  },
  {
    id: 5,
    type: MsgType.Talk,
    serverTime: 1561939380000,
    cardType: CardType.Image,
    body: {
      imgUrl: 'http://puui.qpic.cn/qqvideo_ori/0/d0546o1ewuk_496_280/0'
    },
    to: {
      userId: 1001,
      name: 'Abbey',
      avatar: MyAvatarUrl
    },
    from: {
      userId: 1002,
      name: 'Bob',
      avatar: OtherAvatarUrl
    } 
  },
  {
    id: 6,
    type: MsgType.Talk,
    serverTime: 1561766681000, // 2019/06/29 08:04
    cardType: CardType.Text,
    body: {
      text: '不吃了。不吃了。不吃了。不吃了。不吃了。不吃了。不吃了。不吃了。不吃了。不吃了。不吃了。不吃了。'
    },
    from: {
      userId: 1001,
      name: 'Abbey',
      avatar: MyAvatarUrl
    },
    to: {
      userId: 1002,
      name: 'Bob',
      avatar: OtherAvatarUrl
    } 
  },
];