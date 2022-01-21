import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Testimonial } from 'src/app/models';
import * as fromData from 'src/app/shared/data';

@Component({
  selector: 'lbk-testimonials-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="container mt-20 lg:mt-0 lg:h-screen lg:grid lg:place-content-center">
      <lbk-testimonials-list
        [testimonials]="testimonials"
      ></lbk-testimonials-list>
    </main>
  `,
})
export class TestimonialsPageComponent implements OnInit {
  testimonials!: Testimonial[];

  ngOnInit(): void {
    this.testimonials = fromData.testimonials;
  }
}
