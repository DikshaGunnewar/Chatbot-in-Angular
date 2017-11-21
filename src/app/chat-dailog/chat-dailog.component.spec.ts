import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDailogComponent } from './chat-dailog.component';

describe('ChatDailogComponent', () => {
  let component: ChatDailogComponent;
  let fixture: ComponentFixture<ChatDailogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatDailogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
