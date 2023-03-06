import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { LetsTalkInvestors1Component } from './components/lets-talk-investors1/lets-talk-investors1.component';
import { HomePartOne1Component } from './components/home-part-one1/home-part-one1.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { AssetTokenizationComponent } from './components/asset-tokenization/asset-tokenization.component';
import { BlockchainConsultationComponent } from './components/blockchain-consultation/blockchain-consultation.component';
import { BuyABricComponent } from './components/buy-a-bric/buy-a-bric.component';
import { DistributionPartnerComponent } from './components/distribution-partner/distribution-partner.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    LetsTalkInvestors1Component,
    HomePartOne1Component,
    OurServicesComponent,
    AssetTokenizationComponent,
    BlockchainConsultationComponent,
    BuyABricComponent,
    DistributionPartnerComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
