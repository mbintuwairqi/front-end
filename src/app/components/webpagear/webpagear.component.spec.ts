import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebpagearComponent } from './webpagear.component';

describe('WebpagearComponent', () => {
  let component: WebpagearComponent;
  let fixture: ComponentFixture<WebpagearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebpagearComponent]
    });
    fixture = TestBed.createComponent(WebpagearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
