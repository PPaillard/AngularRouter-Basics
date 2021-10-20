import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss']
})
export class ArticleViewComponent implements OnInit {

  public articleID: number; 

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // USE THIS
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleID = parseInt(params.get('articleID'));
    });

    // NEVER USE THIS /!\
    this.articleID = parseInt(this.route.snapshot.paramMap.get('articleID'));
  }
}
