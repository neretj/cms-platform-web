import { NgModule } from '@angular/core';

import {
	MatToolbarModule,
	MatMenuModule,
	MatIconModule,
	MatButtonModule,
	MatTableModule,
	MatDividerModule,
	MatProgressSpinnerModule,
	MatInputModule,
	MatCardModule,
	MatSlideToggleModule,
	MatSelectModule,
	MatOptionModule,
	MatSidenavModule,
	MatListModule,
	MatGridListModule,
	MatPaginatorModule,
	MatTabsModule,
	MatSortModule,
	MatButtonToggleModule,
	MatStepperModule,
	MatExpansionModule,
	MatDatepickerModule,
	MatChipsModule,
	MatRadioModule,
	MatSliderModule,
	MatProgressBarModule,
	MatDialogModule,
	MatTooltipModule,
	MatCheckboxModule,
	MatSnackBarModule,
	MatNativeDateModule
} from '@angular/material';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
	suppressScrollX: true
};

@NgModule({
	imports: [
		MatToolbarModule,
		MatInputModule,
		MatCardModule,
		MatMenuModule,
		MatIconModule,
		MatButtonModule,
		MatTableModule,
		MatDividerModule,
		MatSlideToggleModule,
		MatSelectModule,
		MatOptionModule,
		MatProgressSpinnerModule,
		MatSidenavModule,
		MatListModule,
		MatGridListModule,
		MatPaginatorModule,
		MatTabsModule,
		MatSortModule,
		MatButtonToggleModule,
		MatStepperModule,
		MatExpansionModule,
		MatDatepickerModule,
		MatChipsModule,
		MatRadioModule,
		MatSliderModule,
		MatProgressBarModule,
		MatDialogModule,
		MatTooltipModule,
		MatCheckboxModule,
		MatNativeDateModule,
		PerfectScrollbarModule
	],
	exports: [
		MatToolbarModule,
		MatInputModule,
		MatCardModule,
		MatMenuModule,
		MatIconModule,
		MatButtonModule,
		MatTableModule,
		MatDividerModule,
		MatSlideToggleModule,
		MatSelectModule,
		MatOptionModule,
		MatProgressSpinnerModule,
		MatSidenavModule,
		MatListModule,
		MatGridListModule,
		MatPaginatorModule,
		MatTabsModule,
		MatSortModule,
		MatButtonToggleModule,
		MatStepperModule,
		MatExpansionModule,
		MatDatepickerModule,
		MatChipsModule,
		MatRadioModule,
		MatSliderModule,
		MatProgressBarModule,
		MatDialogModule,
		MatTooltipModule,
		MatCheckboxModule,
		MatSnackBarModule,
		MatNativeDateModule,
		PerfectScrollbarModule
	],
	providers: [
		{
			provide: PERFECT_SCROLLBAR_CONFIG,
			useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
		}
	]
})

export class MaterialModule { }
