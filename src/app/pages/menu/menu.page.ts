import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: false
})
export class MenuPage implements OnInit {

  email: string = "";
  texto: string = "";
  contra: string = "";


  constructor(private menu: MenuController, private router:Router, private activedRoute: ActivatedRoute) {
    menu.enable(true);
      const nav = this.router.getCurrentNavigation();
      const state = nav?.extras.state ?? history.state; 

      this.email = state?.correoEnviado;
      this.texto = state?.texto;
      this.contra = state?.claveEnviada;
   }

  ngOnInit() {
  }

}
