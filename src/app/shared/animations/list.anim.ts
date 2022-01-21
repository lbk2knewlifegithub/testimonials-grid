import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger
} from '@angular/animations';

export const listAnimation = (element: string) => {
  return trigger('listAnimation', [
    transition(':enter', [
      query(
        element,
        [
          style({ opacity: 0, transform: 'scale(.8)' }),
          stagger(100, [animate(230)]),
        ],
        {
          optional: true,
        }
      ),
    ]),
  ]);
};
