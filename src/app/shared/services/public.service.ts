import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Validators, AbstractControl } from '@angular/forms';
import { keys } from '../configs/localstorage-key';

@Injectable({
  providedIn: 'root'
})
export class PublicService {
  apiUrl = environment?.apiUrl;
  userInfo = JSON?.parse(window?.localStorage?.getItem(keys?.userData) || '{}');
  headers = new HttpHeaders()?.set('Content-Type', 'application/json');

  //End Home Page Loading
  endGetAllProductLoading = new BehaviorSubject<boolean>(false);
  endGetFamousArticlesLoading = new BehaviorSubject<boolean>(false);

  pushUrlData = new BehaviorSubject<boolean>(false);
  messageSent = new BehaviorSubject<boolean>(false);
  homeRouteData = new BehaviorSubject<{}>({});
  notificationAlert = new BehaviorSubject<{}>({});
  notificationId = new BehaviorSubject<{}>({});
  toggleAsideMenu = new BehaviorSubject<boolean>(false);
  countdown = new BehaviorSubject<boolean>(false);

  article_Tab = new BehaviorSubject<{}>({});
  recallSearchResults = new BehaviorSubject<{}>({});
  recallNotificationsAlerts = new BehaviorSubject<{}>({});
  recallSettingsBank = new BehaviorSubject<{}>({});
  show_loader = new Subject<boolean>();

  showSideMenu = new BehaviorSubject<boolean>(false);
  changePageSub = new BehaviorSubject<{}>({});
  emitEditPatchImagePreview = new BehaviorSubject<{}>({});

  alphabet: any = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  constructor(
    private translate: TranslateService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.toggleAsideMenu?.next(true);
  }

  base64ToImageFile(data: any, filename: any) {
    const arr = data.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename + '.' + mime.substr(6), { type: mime });
  }
  translateTextFromJson(text: string): any {
    return this.translate.instant(text);
  }
  downloadExampleFn(urlRoot: any): Observable<Blob> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'blob' as 'json'
    };
    return this.http.get<any>(`${this.apiUrl}/${urlRoot}`, httpOptions);
  }
  downloadExample(url: any): void {
    window.open(environment?.apiUrl + '/' + url);
  }
  returnArryElementIds(elements: any): any {
    let ids: any = [];
    elements?.forEach((elment: any) => {
      ids?.push(elment?.id);
    });
    return ids;
  }
  returnArryElementsObjects(arrIds: any, list: any): any {
    let finalArr: any = [];
    arrIds?.forEach((id: any) => {
      list?.forEach((item: any) => {
        if (id == item?.id) {
          finalArr?.push(item);
        }
      });
    });
    return finalArr;
  }

  getLetter(index: any): any {
    return this.alphabet[index];
  }

  clearValidationErrors(control: AbstractControl): void {
    control.markAsPending();
  }
  addValidators(form: any, controls: string[], pattern?: any): any {
    controls.forEach(c => {
      form.get(c)?.setValidators([Validators.required, Validators.pattern(pattern)]);
      form.get(c)?.updateValueAndValidity();
    });
  }
  removeValidators(form: any, controls: string[], pattern?: any): any {
    controls.forEach(c => {
      form.get(c)?.clearValidators();
      form.get(c)?.updateValueAndValidity();
    });
  }
}
