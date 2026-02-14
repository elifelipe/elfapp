import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [
    {
      title: 'Desenvolvimento de aplicativos',
      description: 'Criamos aplicativos mobile de alto desempenho para Android e iOS com foco em escalabilidade.',
      icon: 'smartphone'
    },
    {
      title: 'Desenvolvimento web',
      description: 'De landing pages a sistemas completos, entregamos interfaces rapidas, responsivas e seguras.',
      icon: 'language'
    },
    {
      title: 'Suporte tecnico',
      description: 'Monitoramento e suporte para manter seus produtos digitais estaveis e atualizados.',
      icon: 'support_agent'
    },
    {
      title: 'Design UI/UX',
      description: 'Design centrado no usuario para melhorar conversao, clareza e experiencia em cada tela.',
      icon: 'brush'
    }
  ];
}
