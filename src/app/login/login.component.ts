import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    // Hard-coded credentials
    const hardCodedUsername = 'nivedita';
    const hardCodedPassword = '1234';

    // Check if the input matches the hard-coded credentials
    if (this.username === hardCodedUsername && this.password === hardCodedPassword) {
      // Simulate successful login
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
 

}

