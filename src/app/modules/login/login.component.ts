import {
	Component
} from '@angular/core';
import {
	FormBuilder,
	FormGroup,
	Validators
} from '@angular/forms';
@Component({
	selector: 'login',
	templateUrl: './login.html',
	styleUrls: ['./login.css']
})
export class LoginComponent {
	loginForm: FormGroup;
	constructor(private fb: FormBuilder) {
		this.loginForm = this.fb.group({
			'email': ['', [Validators.required, Validators.pattern('^[^\s@]+@[^\s@]+\.[^\s@]{2,}$')]],
			'password': ['', Validators.required]
		})
	}
	submitForm(value: any) {
		console.log(">>>>>>>>>>value", value);
	}

}