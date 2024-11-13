import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentGroupDetailsComponent } from './tournament-group-details.component';

describe('TorunamentGroupDetailsComponent', () => {
  let component: TournamentGroupDetailsComponent;
  let fixture: ComponentFixture<TournamentGroupDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TournamentGroupDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TournamentGroupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
