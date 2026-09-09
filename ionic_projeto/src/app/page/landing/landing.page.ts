import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
  IonIcon,
  IonText
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { rocketOutline, logInOutline, personAddOutline } from 'ionicons/icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
    IonIcon,
    IonText
  ]
})
export class LandingPage implements OnInit {

  constructor(private router: Router) {
    // Registra os ícones nativos do Ionicons para uso standalone
    addIcons({ rocketOutline, logInOutline, personAddOutline });
  }

  ngOnInit() { }

  // Navega para a tela de Login
  irParaLogin() {
    this.router.navigate(['/login']);
  }

  // Navega para a tela de Cadastro
  irParaCadastro() {
    this.router.navigate(['/cadastro']);
  }
}
