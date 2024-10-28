import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaConnectionsComponent } from './social-media-connections.component';

describe('SocialMediaConnectionsComponent', () => {
  let component: SocialMediaConnectionsComponent;
  let fixture: ComponentFixture<SocialMediaConnectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialMediaConnectionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMediaConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
