import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChannelService, Post } from '../Channels.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-Channel-Edit',
  templateUrl: './EditChannels.component.html',
  styleUrls: ['./EditChannels.component.scss']
})

export class EditChannelsComponent implements OnInit {
  @Output () onPostEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  postForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    message: ['',Validators.required]
  });
  
  constructor(private fb: FormBuilder,
    private ChannelService: ChannelService
    ) { }

  ngOnInit() {
  }
  clearForm(): void{
    this.postForm = this.fb.group({
      username: '',
      message: ''
    });
  }

  onSubmit(): void{
    console.log(this.postForm.value)
    let post: Post = {
      username: this.postForm.value.username,
      message: this.postForm.value.message,
      id: "",
      created_on: new Date(),
      updated_on: undefined
    };
    this.ChannelService.createNewMessage(post, "MBurya").subscribe(data =>{
      console.log(data);
      this.clearForm();
      location.reload();
    })
  }
}