import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Testimonial } from 'src/app/models';

@Component({
  selector: 'lbk-testimonial',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './testimonial.component.html',
})
export class TestimonialComponent {
  @Input() testimonial!: Testimonial;
  @Input() displayQuotes = false;

  get option() {
    return this.testimonial.option;
  }
}
