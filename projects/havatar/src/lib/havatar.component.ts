import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ElementRef, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'h-avatar',
  templateUrl: './havatar.component.html',
  styleUrls: ['./havatar.component.scss'],
})
export class HavatarComponent implements OnInit {
  @Input('name') fullName: string = '';
  tagName: string = '';
  colorCode: string = '';
  colors: string[] = [
    '#00AA55',
    '#009FD4',
    '#B381B3',
    '#939393',
    '#E3BC00',
    '#D47500',
    '#DC2A2A',
  ];

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    let container = this.elementRef.nativeElement.querySelector('.avatar');
    this.generateNameTag();
    this.colorCode = this.getRandomColor();
    this.renderer.setStyle(container, 'backgroundColor', this.colorCode);
    let name = this.elementRef.nativeElement.querySelector('.user-name');
    name.innerHTML = this.tagName;
    this.renderer.setStyle(name, 'color', '#fff');
  }

  getRandomColor() {
    return this.colors[this.numberFromText(this.tagName) % this.colors.length];
  }

  numberFromText(text: string) {
    // numberFromText("AA");
    const charCodes = text
      .split('') // => ["A", "A"]
      .map((char) => char.charCodeAt(0)) // => [65, 65]
      .join(''); // => "6565"
    return parseInt(charCodes, 10);
  }

  generateNameTag() {
    if (this.fullName) {
      const arr: string[] = this.fullName.split(' ');

      switch (arr.length) {
        case 0:
          this.tagName = 'N/A';
          break;
        case 1:
          this.tagName = arr[0].charAt(0);
          break;
        case 2:
          this.tagName = arr[0].charAt(0) + arr[1].charAt(0);
          break;
        case 3:
          this.tagName = arr[1].charAt(0) + arr[2].charAt(0);
          break;
        default:
          this.tagName = arr[0].charAt(0) + arr[1].charAt(0);
      }
    } else {
      this.tagName = 'N/A';
    }

    this.tagName = this.tagName.toUpperCase();
  }
}
