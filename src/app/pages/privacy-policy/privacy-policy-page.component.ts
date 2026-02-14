import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-privacy-policy-page',
  standalone: true,
  templateUrl: './privacy-policy-page.component.html',
  styleUrl: './privacy-policy-page.component.scss'
})
export class PrivacyPolicyPageComponent {
  policyUrl: SafeResourceUrl;
  appName: string;
  frameTitle: string;

  constructor(
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute
  ) {
    const data = this.route.snapshot.data;
    const policyFile = data['policyFile'] ?? 'politica-privacidade-pingwifi.html';
    this.appName = data['appName'] ?? 'Pingwifi';
    this.frameTitle = data['frameTitle'] ?? `Politica de Privacidade do aplicativo ${this.appName}`;

    this.policyUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `/assets/pages/${policyFile}`
    );
  }
}
