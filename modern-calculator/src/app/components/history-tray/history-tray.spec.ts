import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryTray } from './history-tray';

describe('HistoryTray', () => {
  let component: HistoryTray;
  let fixture: ComponentFixture<HistoryTray>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryTray]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryTray);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
