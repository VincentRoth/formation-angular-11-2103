import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Veterinarian } from '../../shared/api/veterinarian';
import { VeterinarianService } from '../../shared/api/veterinarian.service';

@Component({
  selector: 'app-vet-form',
  templateUrl: './vet-form.component.html',
  styleUrls: ['./vet-form.component.scss'],
})
export class VetFormComponent implements OnInit {
  vetForm: FormGroup;

  get id(): number {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    return id ? Number(id) : null;
  }

  constructor(
    private vetService: VeterinarianService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.id) {
      this.vetService.get(this.id).subscribe((vet) => {
        this.vetForm = new FormGroup({
          firstName: new FormControl(vet.firstName),
          lastName: new FormControl(vet.lastName),
        });
      });
    } else {
      this.vetForm = new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl(),
      });
    }
  }

  onSubmit(): void {
    const value: Veterinarian = this.vetForm.value;
    if (this.id) {
      this.vetService
        .update({
          ...value,
          id: this.id,
        })
        .subscribe(() => {
          this.router.navigate(['/animals']);
        });
    } else {
      this.vetService.create(value).subscribe(() => {
        this.router.navigate(['/animals']);
      });
    }
  }
}
