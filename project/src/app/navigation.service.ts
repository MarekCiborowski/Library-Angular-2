import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) { }

  redirect(pagename: string) {
    console.log(pagename);
    this.router.navigateByUrl('/'+pagename);
  }
}
