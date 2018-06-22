import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  news;
  errMsg;
  userData = {};

  constructor(public httpService: HttpService, private toastr: ToastsManager, private vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
   }

  ngOnInit() {
    this.httpService.getNews().subscribe(data => {
      this.news = data;
    },
      err => console.log(err)
    );

     $('.carousel').carousel();
  }

  login(data) {
    this.httpService.loginUser(data).subscribe(user => {
      this.errMsg = null;
      this.toastr.success('התחברת בהצלחה');
      this.userData = {};
      localStorage.setItem('token', user['token']);
    }, err => {
        if (err instanceof HttpErrorResponse) {
          this.errMsg = err.error;
        }
    });
  }

  addContent() {
    const obj = {text: ''};
    this.httpService.addNews(obj).subscribe((addedData) => {
      this.news.push(addedData);
      this.toastr.warning('!נוסף תוכן חדש');
    });

  }

  updateData(data) {
    this.httpService.updateText(data).subscribe(() => {
      this.toastr.info('!התוכן נשמר');
    });
  }

  deleteData(data) {
    this.httpService.deleteField(data).subscribe(() => {
      for (let i = 0; i < this.news.length; i++) {
        // tslint:disable-next-line:no-unused-expression
        data._id === this.news[i]._id ? this.news.splice(i, 1) : null;
      }
      this.toastr.error('!נמחק');
    });
  }

  loggingOut() {
    this.httpService.logOut();
    this.toastr.success('!מנותק');
  }




}
