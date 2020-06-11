import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitServiceService } from '../git-service.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
data;
  userName;
  repos;
  pageOfItems : Array<any>
  constructor(private ActivatedRoute: ActivatedRoute, private GithubService:GitServiceService) {
    this.userName = this.ActivatedRoute.snapshot.params.userName;
    console.log(this.userName)
    this.GithubService.getSer(this.userName).subscribe((data)=> {
      this.data = data;
      console.log(this.data)
      this.GithubService.getrepo(this.userName).subscribe((repos)=> {
        this.repos = repos;
        console.log(this.repos)
      })
   })
  }
  ngOnInit(): void {
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}

}

