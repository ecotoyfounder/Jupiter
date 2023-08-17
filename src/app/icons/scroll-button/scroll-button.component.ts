import {Component, EventEmitter, Input, Output} from "@angular/core";

const filmGalleryListWidth = 500;
const scrollDirection = (direction: string) => direction === "left" ? -filmGalleryListWidth : filmGalleryListWidth;

@Component({
  selector: "app-scroll-button",
  templateUrl: "./scroll-button.component.html",
  styleUrls: ["./scroll-button.component.scss"]
})
export class ScrollButtonComponent {

  @Input() direction: "left" | "right" | "" = "";
  @Input() ref: Element | undefined;

  @Output() hasScrolled: EventEmitter<number> = new EventEmitter();

  clickScrollButton(direction: string) {
    if (this.ref) {
      this.hasScrolled.emit(this.ref.scrollLeft + scrollDirection(direction));
      this.ref.scrollBy({left: scrollDirection(direction), behavior: 'smooth'});
    }
  }
}
