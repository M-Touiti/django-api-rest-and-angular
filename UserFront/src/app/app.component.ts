import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {
	input;

	constructor(private userService:UserService){}

	ngOnInit(){
		this.input = {
			username: '',
			email: '',
			password: ''			
		};
	}

	registerUser(){
		console.log(this.input)
		this.userService.registerNewUser(this.input).subscribe(
			response => {
				alert('User ' + this.input.email + ' has been created!')
			},
			error => {
				console.log('error', error)
			}
		);
	}

	loginUser(){
		console.log(this.input)
		this.userService.loginUser(this.input).subscribe(
			response => {
				console.log(response)
				alert('User ' + this.input.email + ' logged!')
			},
			error => {
				console.log('error', error)
			}
		);
	}
}
