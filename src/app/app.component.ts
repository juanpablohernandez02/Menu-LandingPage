import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarMenuModule } from "./components/SideBarMenu/side-bar-menu/side-bar-menu.module";
import { FormComponent } from "./components/form/form.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, SideBarMenuModule, FormComponent]
})
export class AppComponent {
  title = 'Menu-LandingPage';
}
