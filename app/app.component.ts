import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('activeIndicator') activeIndicatorElement: ElementRef;
  @ViewChild('group') groupElement: ElementRef;

  labels = ['label 1', 'label 2', 'label 3'];

  selectedIndex: number;

  itemWidth: number;

  ngAfterViewInit() {
    this.itemWidth = this.groupElement.nativeElement.offsetWidth / this.labels.length;
    this.activeIndicatorElement.nativeElement.style.width = this.itemWidth + 'px';
  }

  selectElement(index: number) {
    this.selectedIndex = index;
    this.updateActiveIndicatorPosition();
  }

  updateActiveIndicatorPosition() {
    this.activeIndicatorElement.nativeElement.style.left = this.itemWidth * (this.selectedIndex) + 'px';
  }
}
