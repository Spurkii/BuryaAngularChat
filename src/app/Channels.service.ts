import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';


export interface Post{
    username: string,
    message: string,
    id: string,
    created_on: Date,
    updated_on: Date | undefined
}

@Injectable({
    providedIn: 'root'
    
})
export class ChannelService{
    private url = "http://73.19.65.35:3500/api"

    constructor(private http: HttpClient){ }

    getAllChannelNames(): Observable<string[]>{
        console.log("getting all channel names")
        return this.http.get<string[]>(`${this.url}/channel`);
    }
    getAllMessages(channelName: string): Observable<any>{
        console.log("getting all messages of channel: " + channelName + ".");
        return this.http.get<Post[]>(`${this.url}/channel/${channelName}`);
    }
    createNewMessage(Post: Post, channelName: string): Observable<Post> {
        console.log("added new message");
        return this.http.post<Post>(`${this.url}/channel/${channelName}`, Post);
    }
    patchMessage(channelName: Post[]): Observable<Post[]>{
        console.log("updated channel message");
        return this.http.patch<Post[]>(`${this.url}/channel`, channelName)
    }
    deleteMessage(channelName: string): Observable<Post>{
        console.log("channel deleted");
        return this.http.delete<Post>(`${this.url}/channel/${channelName}`);
    }
}