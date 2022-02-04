import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/animations/route.animations';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs';

@Component({
  selector: 'apollo-photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoViewerComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  public imageSrc = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  public ngOnInit() {
    this.route.params.subscribe((params) => {
      this.imageSrc = params['imgSrc'];
      console.log('Jacob Testing =====', this.imageSrc);
    });
  }

  public getBackToGallery() {
    this.router.navigate(['/photo-gallery/overview']);
  }
}
