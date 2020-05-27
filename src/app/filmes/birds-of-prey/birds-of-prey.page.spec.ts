import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BirdsOfPreyPage } from './birds-of-prey.page';

describe('BirdsOfPreyPage', () => {
  let component: BirdsOfPreyPage;
  let fixture: ComponentFixture<BirdsOfPreyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirdsOfPreyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BirdsOfPreyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
