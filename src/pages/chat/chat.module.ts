import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatPage } from './chat';
import {SocketIoConfig} from "ng-socket-io/socketIoConfig";
import {SocketIoModule} from "ng-socket-io/socket-io.module";

const config: SocketIoConfig = { url: 'http://192.168.1.4:3001', options: {} };


@NgModule({
  declarations: [
    ChatPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatPage),
    SocketIoModule.forRoot(config)
  ],
})
export class ChatPageModule {}
