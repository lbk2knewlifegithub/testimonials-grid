import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestimonialComponent } from './components';
import { TestimonialsListComponent } from './components/testimonial-list/testimonial-list.component';
import { TestimonialsPageComponent } from './containers';
import { TestimonialsRoutingModule } from './testimonials-routing.module';

const COMPONENTS = [TestimonialComponent, TestimonialsListComponent];
const CONTAINERS = [TestimonialsPageComponent];

@NgModule({
  imports: [CommonModule, RouterModule, TestimonialsRoutingModule],
  declarations: [COMPONENTS, CONTAINERS],
})
export class TestimonialsModule {}
