import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div style="text-align :center" class="content">
  <h1>Welcome to {{title}}</h1>
  <h2>Pushing into Github Angular Repository by Saiteja</h2>

  <h2>Pushing into Github Angular Repository by Parnab</h2>

  <h3> QuadCrew4 <h3>
  <h2>Pushing into Github Angular Repository by Shilpi</h2>

  </div>
 `,
 styles: [
   `h1,h2{
     color:red,
     font-family:verdana;
   }`
 ]
})
export class AppComponent {
  title = 'practice-app';
}
