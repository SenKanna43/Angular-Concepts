import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ApiHandlerService } from 'src/app/services/api-handler.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  apiData: any
  constructor(private postsService: ApiHandlerService) { }
  ngOnInit(): void {
    this.postsService.fetchDataFromApi().subscribe((data) => {
      this.apiData = data
    })
    console.log('Posts');
  }
}
