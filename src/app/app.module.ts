import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChannelService } from './Channels.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChannelComponent } from './Channels/Channels.component';
import { MainComponent } from './Main/Main.component';
import { CreatedChannelsComponent } from './CreatedChannels/CreatedChannels.component';
import { EditChannelsComponent } from './EditChannels/EditChannels.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [					
    AppComponent,
      ChannelComponent,
      MainComponent,
      CreatedChannelsComponent,
      EditChannelsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ChannelService],
  bootstrap: [AppComponent]
})
export class AppModule { }