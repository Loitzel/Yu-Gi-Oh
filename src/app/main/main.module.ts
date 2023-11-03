import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { ProfileRoutingModule } from './main-routing.module';
import { NewDeckComponent } from './pages/new-deck/new-deck.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ByPlayerComponent } from './pages/search/by-player/by-player.component';
import { ByAtributeComponent } from './pages/search/by-attribute/by-attribute.component';
import { ByRegionComponent } from './pages/search/by-region/by-region.component';
import { ByTournamentComponent } from './pages/search/by-tournament/by-tournament.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';
import { MatTable, MatTableModule } from '@angular/material/table';
import { NewTournamentComponent } from './pages/new-tournament/new-tournament.component';
import { TournamentInfoComponent } from './pages/tournament-info/tournament-info.component';




@NgModule({
  declarations: [
    NewDeckComponent,
    LayoutPageComponent,
    ProfileComponent,
    ByPlayerComponent,
    ByAtributeComponent,
    ByRegionComponent,
    ByTournamentComponent,
    NewTournamentComponent,
    TournamentInfoComponent,

  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSortModule,
    MatTableModule,
  ]
})
export class ProfileModule { }