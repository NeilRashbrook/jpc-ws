import MessageCall from "jpc-core/message.js";
import { assert } from "jpc-core/util.js";

export default class WSCall extends MessageCall {
  /**
   * @param webSocket {WebSocket from ws}
   */
  constructor(webSocket) {
    assert(typeof (webSocket.on) == "function");
    super();
    this._webSocket = webSocket;
    webSocket.on("message", message => this._incomingMessage(message));
  }

  send(message) {
    this._webSocket.send(JSON.stringify(message));
  }
}
