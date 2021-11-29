import { Component, OnInit } from '@angular/core';
import { Post, ChannelService } from '../Channels.service';

@Component({
  selector: 'app-Main',
  templateUrl: './Main.component.html',
  styleUrls: ['./Main.component.scss']
})
export class MainComponent implements OnInit {
  
  data: string[] =[];

  posts: string[] = [];

  constructor(private channels: ChannelService) { }

  ngOnInit() {
    this.channels.getAllChannelNames().subscribe(data => {
      console.log("inside main component", data);
      this.posts = data;
    })
  }

}
