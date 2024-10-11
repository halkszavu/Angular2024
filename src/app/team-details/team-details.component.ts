import { UpperCasePipe } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Team } from '../teams/model/teams.model';

@Component({
  selector: 'app-team-details',
  standalone: true,
  imports: [UpperCasePipe, FormsModule],
  templateUrl: './team-details.component.html',
  styleUrl: './team-details.component.css'
})
export class TeamDetailsComponent {
  @Input() team : Team | undefined;
  @Output() clearDetails = new EventEmitter();
}
