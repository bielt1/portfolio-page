// blog.component.ts
import { Component, OnInit } from '@angular/core';
import { InstagramService } from './instagram.service';
import { FlexLayoutModule } from '@angular/flex-layout';




@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

export class BlogComponent implements OnInit {
  public instagramPosts: any[] = [];
  constructor(private instagramService: InstagramService) {}

  ngOnInit(): void {
    this.instagramService.getInstagramPosts().subscribe((data: any) => {
      this.instagramPosts = data.data;
    });
  }
}
