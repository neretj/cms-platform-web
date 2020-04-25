import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from './services/translation-loader.service';
import { locale as english } from './services/i18n/en';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private translate: TranslationLoaderService) {
    this.translate.loadTranslations(english);
  }

  ngOnInit() {
  }
}
