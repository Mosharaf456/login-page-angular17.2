import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

import {MatButtonModule} from '@angular/material/button';

import {ThemePalette} from '@angular/material/core';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatGridListModule, MatButtonModule, MatCheckboxModule, FormsModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  text:string = '';
  title:string = 'AGCG';
  aRoute :ActivatedRoute = inject(ActivatedRoute);

  constructor(){
    this.text = this.aRoute.snapshot.data['text'];
  }
  login(){
    alert('Login');
    //API call using service API call to login 
  }
}
