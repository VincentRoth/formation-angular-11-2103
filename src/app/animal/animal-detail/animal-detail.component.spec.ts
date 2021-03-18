import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AnimalService } from '../../shared/api/animal.service';
import { FormatPhonePipe } from '../../shared/format-phone.pipe';
import { MailToDirective } from '../../shared/mail-to.directive';

import { AnimalDetailComponent } from './animal-detail.component';

describe('AnimalDetailComponent', () => {
  let component: AnimalDetailComponent;
  let fixture: ComponentFixture<AnimalDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimalDetailComponent, FormatPhonePipe, MailToDirective],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        AnimalService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {
                animal: {
                  id: 2,
                  name: 'Chatbus',
                  species: 'cat',
                  veterinarian: 'Ged Épervier',
                  comment:
                    'Faire prendre rdv 1 mois au moins en avance afin de pouvoir réserver le hangar du mécaniste voisin.',
                  email: 'test2@gmail.com',
                  phoneNumber: '06.12.34.56.79',
                },
              },
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a data', () => {
    expect(component.animal.id).toEqual(2);
  });
});
