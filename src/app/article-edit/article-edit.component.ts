import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent implements OnInit {

  public articleID: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.parent.paramMap.subscribe((params: ParamMap) => {
      this.articleID = parseInt(params.get('articleID'));
    });
  }
}
