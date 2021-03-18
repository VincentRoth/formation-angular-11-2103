import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MailToDirective } from '../../shared/mail-to.directive';
import { AnimalItemComponent } from '../animal-item/animal-item.component';

import { AnimalListComponent } from './animal-list.component';

describe('AnimalListComponent', () => {
  let component: AnimalListComponent;
  let fixture: ComponentFixture<AnimalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimalListComponent, AnimalItemComponent, MailToDirective],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalListComponent);
    component = fixture.componentInstance;
    component.animals = [
      {
        id: 1,
        name: 'Idéfix',
        species: 'dog',
        veterinarian: "Panoramix D'Armorique",
        comment: 'Développe une allergie à la potion magique.',
        email: 'test1@gmail.com',
        phoneNumber: '06.12.34.56.78',
      },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
