import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created with ♥ by <b><a href="https://www.hashstudioz.com" target="_blank">Hashstudioz</a></b> 2020
    </span>
  `,
})
export class FooterComponent {
}
