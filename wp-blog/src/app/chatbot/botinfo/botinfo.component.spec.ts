import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotinfoComponent } from './botinfo.component';

describe('BotinfoComponent', () => {
  let component: BotinfoComponent;
  let fixture: ComponentFixture<BotinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
