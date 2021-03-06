import { TWsMarketTickerPub, TWsMarketTickerSub, WsSubjectEnum } from '@nik-kita/kucoin-777-ws-types';

export enum PubSubToWs {
  SUBSCRIBE = 'subscribe',
  UNSUBSCRIBE = 'unsubscribe',
  OPEN = 'open',
  CLOSE = 'close',
}

export enum PubSubFromWs {
  OPEN = 'open',
  CLOSE = 'close',
}

export enum PubSubFromClient {

}

export enum PubSubFromServer {
  CLIENT_CONNECT = 'client-connect',
  CLIENT_DISCONNECT = 'client-disconnect'
}

export enum PubSubChannel {
  TO_WS = 'to:ws',
  FROM_WS = 'from:ws',
  FROM_SERVER = 'from:server',
}

export const PubSub = {
  [PubSubChannel.TO_WS]: {
    open() {
      return JSON.stringify({ _: PubSubToWs.OPEN });
    },
    close() {
      return JSON.stringify({ _: PubSubToWs.CLOSE });
    },
    subscribe(subscription: { subject: WsSubjectEnum, payload?: any }) {
      return JSON.stringify({ _: PubSubToWs.SUBSCRIBE, ...subscription });
    },
    unsubscribe(subscription: { subject: WsSubjectEnum, payload?: any }) {
      return JSON.stringify({ _: PubSubToWs.UNSUBSCRIBE, ...subscription })
    }
  },
  [PubSubChannel.FROM_WS]: {
    open() {
      return JSON.stringify({ _: PubSubFromWs.OPEN });
    },
    close() {
      return JSON.stringify({ _: PubSubFromWs.CLOSE });
    }
  },
  [PubSubChannel.FROM_SERVER]: {
    clientConnect() {
      return JSON.stringify({ _: PubSubFromServer.CLIENT_CONNECT });
    },
    clientDisconnect() {
      return JSON.stringify({ _: PubSubFromServer.CLIENT_DISCONNECT });
    }
  }
};
