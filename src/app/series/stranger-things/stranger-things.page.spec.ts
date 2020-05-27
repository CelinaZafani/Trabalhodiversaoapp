import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StrangerThingsPage } from './stranger-things.page';

describe('StrangerThingsPage', () => {
  let component: StrangerThingsPage;
  let fixture: ComponentFixture<StrangerThingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrangerThingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StrangerThingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
