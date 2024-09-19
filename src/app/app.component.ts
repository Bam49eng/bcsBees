import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  visibleDivId: string = 'home';  // Initialize an empty string for visibility control

  // Function to show a specific div by ID and hide all others
  toggleDiv(divId: string): void {
    this.visibleDivId = divId;  // Set the visible div's ID
  }

  // Function to check if a div should be visible
  isDivVisible(divId: string): boolean {
    return this.visibleDivId === divId;
  }
  title = 'bcsBees';
}