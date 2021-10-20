import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleCommentsComponent } from './article-comments/article-comments.component';

const appRoutes: Routes = [
  {
    path: 'articles',
    component: ArticleListComponent
  },
  {
    path: 'articles/:articleID',
    component: ArticleViewComponent,
    children: [
      {
        path: '',
        component: ArticleCommentsComponent
      },
      {
        path: 'edit',
        component: ArticleEditComponent
      }
    ]
  },
  {
    path: 'contact',
    component: ContactUsComponent,
  },
  {
    path: '',
    redirectTo: '/articles',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    PageNotFoundComponent,
    ContactUsComponent,
    ArticleViewComponent,
    ArticleEditComponent,
    ArticleCommentsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
