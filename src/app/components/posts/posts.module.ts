import {NgModule} from '@angular/core';
import {PostsComponent} from './posts.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [PostsComponent],
  imports: [CommonModule],
  exports: [PostsComponent]
})

export class PostsModule {}
