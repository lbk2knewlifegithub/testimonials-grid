import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="relative mt-20 lg:mt-0">
      <p class="text-center text-xs lg:fixed lg:bottom-0 lg:w-full">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
          >Frontend Mentor</a
        >. Coded by
        <a
          class="text-sky-600 decoration-wavy"
          href="https://github.com/lbk2knewlifegithub"
          >lbk2k</a
        >.
      </p>
    </footer>
  `,
})
export class FooterComponent {}
