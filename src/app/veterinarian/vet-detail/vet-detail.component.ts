import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Veterinarian } from '../../shared/api/veterinarian';
import { VeterinarianService } from '../../shared/api/veterinarian.service';

@Component({
  selector: 'app-vet-detail',
  templateUrl: './vet-detail.component.html',
  styleUrls: ['./vet-detail.component.scss'],
})
export class VetDetailComponent implements OnInit {
  vet: Veterinarian;

  constructor(
    private veterinarianService: VeterinarianService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.veterinarianService.get(Number(id)).subscribe((vet) => {
      this.vet = vet;
    });
  }
}
