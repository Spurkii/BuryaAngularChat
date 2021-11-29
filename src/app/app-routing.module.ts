import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Main/Main.component';
import { CreatedChannelsComponent } from './CreatedChannels/CreatedChannels.component';
const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'posts/:username', component:CreatedChannelsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }