import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';


export interface Post{
    username: string,
    message: string,
    id: string,
    created_on: Date,
    updated_on: Date
}

@Injectable({
    providedIn: 'root'
    
})
export class ChannelService{
    private url = "http://73.19.65.35:3500/api/channel"

    constructor(private http: HttpClient){ }

    getAllChannelNames(): Observable<string[]>{
        console.log("getting all channel names")
        return this.http.get<string[]>(`${this.url}`);
    }
    getAllMessages(channelName: string): Observable<any>{
        console.log("getting all messages of channel: " + channelName + ".");
        return this.http.get<any>(`${this.url}/${channelName}`);
    }
    createNewMessage(channelName: Post): Observable<Post> {
        console.log("added new message");
        return this.http.post<Post>(`${this.url}`,channelName);
    }
    patchMessage(channelName: Post): Observable<Post>{
        console.log("updated channel message");
        return this.http.patch<Post>(`${this.url}`, channelName)
    }
    deleteMessage(channelName: string): Observable<Post>{
        console.log("channel deleted");
        return this.http.delete<Post>(`${this.url}/${channelName}`);
    }
}