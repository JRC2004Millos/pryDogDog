import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-veterinario',
  templateUrl: './veterinario.component.html',
  styleUrls: ['./veterinario.component.css']
})
export class VeterinarioComponent implements OnInit {
  veterinarioId!: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.veterinarioId = +this.route.snapshot.paramMap.get('id')!;
    console.log('Veterinario ID:', this.veterinarioId);
  }
}