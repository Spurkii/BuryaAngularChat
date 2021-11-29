
import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Input } from '@angular/core';
import { Post, ChannelService } from '../Channels.service';

@Component({
  selector: 'app-Channels',
  templateUrl: './Channels.component.html',
  styleUrls: ['./Channels.component.scss']
})
export class ChannelComponent implements OnInit {
@Input() channel: string="";
  constructor(private channels: ChannelService) { }

  ngOnInit() {
    
  }

}