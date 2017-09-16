import {
	Injectable
} from '@angular/core';
import {
	Http,
	Response
} from '@angular/http';
import 'rxjs/add/operator/map';

const data: any = [{
	name: "anchal",
	id: 1
}]
@Injectable()
export class Dataservice {

	constructor(private http: Http) {}
	getdata() {
		return this.http.get(`https://jsonplaceholder.typicode.com/users`)
			.map((res: Response) => {
				return res.json()
			});
	}
	senddata() {
		return this.http.get('https://jsonplaceholder.typicode.com/todos')
			.map((res: Response) => res.json(),
				(error) => {
					console.log(error);
				})
	}
}