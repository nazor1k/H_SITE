import {Component, Input} from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader, MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {NgClass, NgStyle} from "@angular/common";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    MatCardHeader,
    MatCard,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardActions,
    MatCardImage,
    MatButton,
    NgStyle,
    NgClass
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {


    @Input() title: string= "";

    @Input() description: string= "";

    @Input() category: string= "";

    @Input() image: string= "";

}
