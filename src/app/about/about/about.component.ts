import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  newsletterTitle = ['Get the', 'latest', 'news'];
  newsletterDescription = [
    'Sign up to our newsletter and be',
    'be the first to know about dates for',
    'tickets releasing and more!',
  ];
  constructor() {}

  lat = 6.242607;
  lng = -75.576072;
  zoom = 18;
  scrollwheel = true;

  ngOnInit() {
  }



}
