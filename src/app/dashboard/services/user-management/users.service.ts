import { environment } from './../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { roots } from '../../../shared/configs/endPoints';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl: string = environment?.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getUsersList(page?: number, per_page?: number, search?: string, sort?: any, conditions?: any): Observable<any> {
    let params = new HttpParams();
    // if (page) {
    //   params = params?.append("page", page);
    // }
    // if (per_page) {
    //   params = params?.append("per_page", per_page);
    // }
    // if (search) {
    //   params = params?.append("search", search);
    // }
    // if (sort && Object.keys(sort)?.length > 0) {
    //   params = params?.append("sort", JSON?.stringify(sort));
    // }
    // if (conditions && conditions?.length > 0) {
    //   params = params?.append("conditions", JSON?.stringify(conditions));
    // }
    return this.http?.get(`${this.baseUrl}/${roots?.dashboard?.users?.usersList}`, { params: params })
  }

  addOrUpdateUser(data: any, id?: number): Observable<any> {
    if (id) {
      return this.http?.post<any[]>(`${this.baseUrl}/${roots?.dashboard?.users?.updateUser}`, data);
    } else {
      return this.http?.post<any[]>(`${this.baseUrl}/${roots?.dashboard?.users?.crateUser}`, data);
    }
  }
  deleteUserId(id: number): Observable<any> {
    let data: any = { id: id };
    return this.http?.post<any>(`${this.baseUrl}/${roots?.dashboard?.users?.deleteUser}`, data);
  }
  resetPassword(data: any): Observable<any> {
    return this.http?.post<any[]>(`${this.baseUrl}/${roots?.dashboard?.users?.resetPassword}`, data);
  }

  getBranches(): Observable<any> {
    return this.http?.get(`${this.baseUrl}/${roots?.dashboard?.users?.getBranches}`)
  }
  getPositions(): Observable<any> {
    return this.http?.get(`${this.baseUrl}/${roots?.dashboard?.users?.getPositions}`)
  }
  getDepartments(): Observable<any> {
    return this.http?.get(`${this.baseUrl}/${roots?.dashboard?.users?.getDepartments}`)
  }
  getJobTitles(): Observable<any> {
    return this.http?.get(`${this.baseUrl}/${roots?.dashboard?.users?.getJobTitles}`)
  }

  getAccountById(id: number): Observable<any> {
    let params = new HttpParams();
    if (id) {
      params = params.append("id", id);
    }
    return this.http?.get<any>(`${this.baseUrl}/${roots?.dashboard?.users?.getAccountById}`, { params: params });
  }

  getUserRoles(): Observable<any> {
    return this.http?.get(`${this.baseUrl}/${roots?.dashboard?.users?.getUserRoles}`)
  }
  getUserPermissions(): Observable<any> {
    return this.http?.get(`${this.baseUrl}/${roots?.dashboard?.users?.getUserPermissions}`)
  }
  addPermissions(data: any): Observable<any> {
    return this.http?.post<any[]>(`${this.baseUrl}/${roots?.dashboard?.users?.addPermissions}`, data);
  }
}
