import 'jquery';

declare global {
  interface JQuery {
    magnificPopup(options?: unknown): any;
    owlCarousel(options?: unknown): any;
  }
}