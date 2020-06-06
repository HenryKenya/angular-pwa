import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../interfaces/post.interface';
import {catchError} from 'rxjs/operators';

@Injectable()
export class DataService {
    url = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private http: HttpClient) {
    }

    getPosts(): Observable<Post[]> {
      return this.http.get<Post[]>(this.url).pipe(catchError(this.handleError));
    }

    private handleError(error: any) {
      console.log(`server error: ${error}`)
      if (error.error instanceof Error) {
        const errMessage = error.error.message;
        return Observable.throw(errMessage);
      }
      return Observable.throw(error || 'Node.js servor error');
    }
}
