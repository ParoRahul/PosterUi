import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { AuthenticateService } from '../../authentication/service/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AvaterService {

  private static MAX_COLOR = 200;				// Max value for a color component
  private static MIN_COLOR = 120; 			// Min value for a color component
  private static FILL_CHANCE = 0.5; 		// Chance of a square being filled [0, 1]
  private static SQUARE = 80; 				  // Size of a grid square in pixels
  private static GRID = 5; 				      // Number of squares width and height
  private static PADDING = AvaterService.SQUARE / 2; 			// Padding on the edge of the canvas in px
  private static SIZE = AvaterService.SQUARE * AvaterService.GRID + AvaterService.PADDING * 2; 	// Size of the canvas
  private static FILL_COLOR 		= '#F0ECE6';

  private userName: string;

  private userAvatarsrc: BehaviorSubject<string>;
  public userToken: Observable<string>;

  constructor( private authsService: AuthenticateService) {
    const user = this.authsService.currentUserToken;
    this.userName = user.userName;
  }

  private generateHash(): number {
    let hash = 0;
    if (this.userName.length === 0) {
        return hash;
    }
    for (let i = 0; i < this.userName.length; i++) {
        const charCode = this.userName.charCodeAt(i);
        hash = ( (hash << 7) - hash) + charCode;
        hash = hash & hash;
    }
    return hash;
  }

  private setupCanvas(): HTMLCanvasElement {
    const canvas: HTMLCanvasElement = document.createElement('canvas');
    canvas.width = AvaterService.SIZE;
    canvas.height = AvaterService.SIZE;
    const context = canvas.getContext('2d');
    context.beginPath();
    context.rect(0, 0, AvaterService.SIZE, AvaterService.SIZE);
    context.fillStyle = AvaterService.FILL_COLOR;
    context.fill();
    return canvas;
  }

  private generateColor(): number[] {
    const rgb: number[] = [];
    for (let i = 0; i < 3; i++) {
        const val = Math.floor(Math.random() * 256);
        const minEnforced = Math.max(AvaterService.MIN_COLOR, val);
        const maxEnforced = Math.min(AvaterService.MAX_COLOR, minEnforced);
        rgb.push(maxEnforced);
    }
    return rgb;
  }

  private generateIdenticon() {
    const canvas = this.setupCanvas();
    const context = canvas.getContext('2d');
    const color: number[] = this.generateColor(); // Generate custom tile color
    const padding = AvaterService.PADDING;
    const square = AvaterService.SQUARE;
    const grid = AvaterService.GRID;
    // Iterate through squares on left side
    for (let x = 0; x < Math.ceil(grid / 2); x++) {
      for (let y = 0; y < grid; y++) {
        // Randomly fill squares
        if (Math.random() < AvaterService.FILL_CHANCE) {
            // fillBlock(x, y, color, context);
            context.beginPath();
            context.rect(padding + x * square, padding + y * square, square, square);
            context.fillStyle = 'rgb(' + color.join(',') + ')';
            context.fill();

            // Fill right side symmetrically
            if (x < Math.floor(grid / 2)) {
                x = (grid - 1) - x;
                context.beginPath();
                context.rect(padding + x * square, padding + y * square, square, square);
                context.fillStyle = 'rgb(' + color.join(',') + ')';
                context.fill();
              // fillBlock((GRID - 1) - x, y, color, context);
            }
        }
      }
    }
    return canvas.toDataURL();
  }

}
