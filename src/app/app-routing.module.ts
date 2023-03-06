import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { LetsTalkInvestors1Component } from './components/lets-talk-investors1/lets-talk-investors1.component';
import { HomePartOne1Component } from './components/home-part-one1/home-part-one1.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { AssetTokenizationComponent } from './components/asset-tokenization/asset-tokenization.component';
import { BlockchainConsultationComponent } from './components/blockchain-consultation/blockchain-consultation.component';
import { BuyABricComponent } from './components/buy-a-bric/buy-a-bric.component';
import { DistributionPartnerComponent } from './components/distribution-partner/distribution-partner.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent },
  { path: 'LetsTalkInvestors1', component: LetsTalkInvestors1Component},
  { path: 'Home', component: HomePartOne1Component},
  { path: 'OurServices', component: OurServicesComponent},
  { path: 'AssetTokenization', component: AssetTokenizationComponent},
  { path: 'BlockchainConsultation', component: BlockchainConsultationComponent},
  { path: 'BuyABric', component: BuyABricComponent},
  { path: 'DistributionPartner', component: DistributionPartnerComponent},
  { path: 'AboutUs', component: AboutUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
