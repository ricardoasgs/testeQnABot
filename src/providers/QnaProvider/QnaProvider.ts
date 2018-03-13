import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class QnaProvider {

    private baseUrl : any = "https://westus.api.cognitive.microsoft.com/qnamaker/v2.0" ;
    private path : any = "/knowledgebases/afb1fc50-46ab-48dd-98e3-c8420c8afe98/generateAnswer" ;
    private uri : any = "https://westus.api.cognitive.microsoft.com/qnamaker/v2.0/knowledgebases/afb1fc50-46ab-48dd-98e3-c8420c8afe98/generateAnswer" ;

    constructor(public http: HttpClient) {

    }

    callService(message: String): any {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Ocp-Apim-Subscription-Key': 'dc6869bc79c2435d98c1552e4448fd7f' });
        return this.http.post(this.uri, message, {headers: headers});
    }

}