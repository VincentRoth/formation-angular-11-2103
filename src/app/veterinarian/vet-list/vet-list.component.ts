import { Component, OnInit } from '@angular/core';
import { Veterinarian } from '../../shared/api/veterinarian';
import { VeterinarianService } from '../../shared/api/veterinarian.service';

@Component({
  selector: 'app-vet-list',
  templateUrl: './vet-list.component.html',
  styleUrls: ['./vet-list.component.scss'],
})
export class VetListComponent implements OnInit {
  displayedColumns = ['lastName', 'firstName', 'actions'];
  vets: Veterinarian[];

  constructor(private veterinarianService: VeterinarianService) {}

  delete(vet: Veterinarian): void {
    this.veterinarianService.delete(vet.id).subscribe({
      complete: () => {
        this.refreshData();
      },
    });
  }

  ngOnInit(): void {
    this.refreshData();
  }

  private refreshData(): void {
    this.veterinarianService.getAll().subscribe((vets) => {
      this.vets = vets;
    });
  }
}
