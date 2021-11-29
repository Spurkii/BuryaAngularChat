import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChannelService } from './Channels.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChannelComponent } from './Channels/Channels.component';
import { MainComponent } from './Main/Main.component';
import { CreatedChannelsComponent } from './CreatedChannels/CreatedChannels.component';
@NgModule({
  declarations: [			
    AppComponent,
      ChannelComponent,
      MainComponent,
      CreatedChannelsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ChannelService],
  bootstrap: [AppComponent]
})
export class AppModule { }