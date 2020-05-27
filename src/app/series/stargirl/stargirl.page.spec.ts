import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StargirlPage } from './stargirl.page';

describe('StargirlPage', () => {
  let component: StargirlPage;
  let fixture: ComponentFixture<StargirlPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StargirlPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StargirlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
