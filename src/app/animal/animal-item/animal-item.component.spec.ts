import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MailToDirective } from '../../shared/mail-to.directive';

import { AnimalItemComponent } from './animal-item.component';

describe('AnimalItemComponent', () => {
  let component: AnimalItemComponent;
  let fixture: ComponentFixture<AnimalItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimalItemComponent, MailToDirective],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalItemComponent);
    component = fixture.componentInstance;
    component.model = {
      id: 2,
      name: 'Chatbus',
      species: 'cat',
      veterinarian: 'Ged Épervier',
      comment:
        'Faire prendre rdv 1 mois au moins en avance afin de pouvoir réserver le hangar du mécaniste voisin.',
      email: 'test2@gmail.com',
      phoneNumber: '06.12.34.56.79',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use model in template', () => {
    expect(
      (fixture.nativeElement as HTMLElement).querySelector('a').textContent
    ).toEqual('Chatbus');
  });
});
