import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentGroupsComponent } from './tournament-groups.component';

describe('TournamentGroupsComponent', () => {
  let component: TournamentGroupsComponent;
  let fixture: ComponentFixture<TournamentGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TournamentGroupsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TournamentGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
