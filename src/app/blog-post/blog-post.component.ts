import { Component, inject } from '@angular/core';
import { Router, RouterOutlet ,RouterLink , RouterLinkActive, ActivationEnd} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [ RouterOutlet,RouterLink , RouterLinkActive],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent {
  route : ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  routeId:number = 0;
  blogType:string[] = ['Angular', 'frameWork'];

   constructor() {
      this.router.events.subscribe((event) => {
        if(event instanceof ActivationEnd) {
          this.routeId = Number(event.snapshot.params['id']);
        }
      });
   }
}
