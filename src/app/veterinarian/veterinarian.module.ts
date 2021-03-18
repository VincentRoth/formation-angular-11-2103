import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeterinarianRoutingModule } from './veterinarian-routing.module';
import { VetListComponent } from './vet-list/vet-list.component';
import { VetDetailComponent } from './vet-detail/vet-detail.component';
import { VetRootComponent } from './vet-root/vet-root.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VetFormComponent } from './vet-form/vet-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    VetListComponent,
    VetDetailComponent,
    VetRootComponent,
    VetFormComponent,
  ],
  imports: [
    CommonModule,
    VeterinarianRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class VeterinarianModule {}
