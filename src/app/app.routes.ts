import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PrivacyPolicyPageComponent } from './pages/privacy-policy/privacy-policy-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'pages/politica-privacidade-pingwifi',
    component: PrivacyPolicyPageComponent,
    data: {
      appName: 'Pingwifi',
      policyFile: 'politica-privacidade-pingwifi.html',
      frameTitle: 'Politica de Privacidade do aplicativo Pingwifi'
    }
  },
  {
    path: 'pages/politica-privacidade-meu-juridico',
    component: PrivacyPolicyPageComponent,
    data: {
      appName: 'Meu Jurídico',
      policyFile: 'politica-privacidade-meu-juridico.html',
      frameTitle: 'Politica de Privacidade do aplicativo Meu Jurídico'
    }
  },
  {
    path: 'pages/politica-privacidade-minha-receita',
    component: PrivacyPolicyPageComponent,
    data: {
      appName: 'Minha Receita',
      policyFile: 'politica-privacidade-minha-receita.html',
      frameTitle: 'Politica de Privacidade do aplicativo Minha Receita'
    }
  },
  {
    path: 'pages/termos-de-uso-minha-receita',
    component: PrivacyPolicyPageComponent,
    data: {
      appName: 'Minha Receita',
      policyFile: 'termos-de-uso-minha-receita.html',
      frameTitle: 'Termos de Serviço do aplicativo Minha Receita'
    }
  },
  {
    path: 'pages/politica-privacidade-prumo',
    component: PrivacyPolicyPageComponent,
    data: {
      appName: 'Prumo',
      policyFile: 'politica-privacidade-prumo.html',
      frameTitle: 'Politica de Privacidade do aplicativo Prumo'
    }
  },
  {
    path: 'pages/politica-privacidade-meu-orcamento',
    component: PrivacyPolicyPageComponent,
    data: {
      appName: 'Meu Orçamento',
      policyFile: 'politica-privacidade-meu-orcamento.html',
      frameTitle: 'Politica de Privacidade do aplicativo Meu Orçamento'
    }
  },
  {
    path: 'pages/politica-privacidade-eppt',
    component: PrivacyPolicyPageComponent,
    data: {
      appName: 'EPPT',
      policyFile: 'politica-privacidade-eppt.html',
      frameTitle: 'Politica de Privacidade do aplicativo EPPT'
    }
  },
  {
    path: 'pages/politica-privacidade-dinee-garcom',
    component: PrivacyPolicyPageComponent,
    data: {
      appName: 'Dinee garcom',
      policyFile: 'politica-privacidade-dinee-garcom.html',
      frameTitle: 'Politica de Privacidade do aplicativo Dinee garcom'
    }
  },
  {
    path: 'pages/privacy-policy-dinee-garcom',
    redirectTo: 'pages/politica-privacidade-dinee-garcom'
  },
  { path: '**', redirectTo: '' }
];
