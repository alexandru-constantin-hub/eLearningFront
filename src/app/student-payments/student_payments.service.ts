import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";


@Injectable()
export class StudentPaymentsService {

    private readonly path = "/api/payments";

    constructor(private http: HttpClient) { }

    getAll(): Observable<any> {
        return this.http.get(this.path, { observe: 'response' })
    }
    getPaymentsForStudent(userId: number,): Observable<any> {
        return this.http.get(this.path + "/payments_for_student/" + userId ,{ observe: 'response' })
    }

    postNewType(newType: any): Observable<any> {
        return this.http.post(this.path, newType);
    }

    getOne(id:number): Observable<any>{
        return this.http.get(this.path + "/" + id,{ observe: 'response' });
    }

    editType(type:any): Observable<any> {
        return this.http.put(this.path ,type);
    }

    changeActive(id: number): Observable<any> {
        return this.http.delete(this.path + "/" + id, {responseType: 'text'});
    }
}