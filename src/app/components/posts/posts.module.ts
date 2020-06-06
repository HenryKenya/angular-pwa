import {NgModule} from '@angular/core';
import {PostsComponent} from './posts.component';

@NgModule({
  declarations: [PostsComponent],
  exports: [PostsComponent]
})

export class PostsModule {}
