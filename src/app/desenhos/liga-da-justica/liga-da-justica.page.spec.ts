import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LigaDaJusticaPage } from './liga-da-justica.page';

describe('LigaDaJusticaPage', () => {
  let component: LigaDaJusticaPage;
  let fixture: ComponentFixture<LigaDaJusticaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigaDaJusticaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LigaDaJusticaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
