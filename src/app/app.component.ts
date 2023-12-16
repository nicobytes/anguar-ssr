import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  http = inject(HttpClient);
  products  = signal<any[]>([])
  ngOnInit() {
    this.http.get<any[]>('https://api.escuelajs.co/api/v1/products').subscribe(data => {
      this.products.set(data);
    });
  }
}
