import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MainLoader } from '../main-loader/main-loader';

@Component({
  imports: [RouterLink,MainLoader],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {


}
