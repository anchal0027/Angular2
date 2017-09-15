import {
	Component
} from '@angular/core';
import {
	FormBuilder,
	FormGroup,
	Validators
} from '@angular/forms';
@Component({
	selector: 'register',
	templateUrl: './register.html',
	styleUrls: ['./register.css']
})
export class RegisterComponent {
	registerForm: FormGroup;
	constructor(private fb: FormBuilder) {
		this.registerForm = this.fb.group({
			username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(8)]],
			email: ['', [Validators.required, Validators.pattern('^[^\s@]+@[^\s@]+\.[^\s@]{2,}$')]],
			password: ['', Validators.required],
			confirmpassword: ['',Validators.required],
		})
	}
	submitForm(value: any) {
		console.log(">>>>>>>>>>.value", value);
	}
}