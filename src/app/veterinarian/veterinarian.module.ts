import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeterinarianRoutingModule } from './veterinarian-routing.module';
import { VetListComponent } from './vet-list/vet-list.component';
import { VetDetailComponent } from './vet-detail/vet-detail.component';
import { VetRootComponent } from './vet-root/vet-root.component';

@NgModule({
  declarations: [VetListComponent, VetDetailComponent, VetRootComponent],
  imports: [CommonModule, VeterinarianRoutingModule],
})
export class VeterinarianModule {}
