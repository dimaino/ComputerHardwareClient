import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CpuListComponent } from './cpu-list/cpu-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'list', component: CpuListComponent }
    ])
  ],
  declarations: [
    CpuListComponent
  ]
})
export class CpuModule {}
