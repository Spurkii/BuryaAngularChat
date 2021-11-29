import { Component, OnInit, Input } from '@angular/core';
import { ChannelService, Post } from '../Channels.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-CreatedChannels',
  templateUrl: './CreatedChannels.component.html',
  styleUrls: ['./Createdchannels.component.scss']
})
export class CreatedChannelsComponent implements OnInit {

  @Input() data:Post[] =[];
  

  constructor(private channel: ChannelService, private router: ActivatedRoute) {}

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.channel.getAllMessages(params['username']).subscribe(data => {
        console.log("Data info", data)
        this.data = data;
      });
    });
  }

}