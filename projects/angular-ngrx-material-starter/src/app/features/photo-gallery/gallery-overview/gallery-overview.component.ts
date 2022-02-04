import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/animations/route.animations';
import { Router } from '@angular/router';

@Component({
  selector: 'omni-web-lonestar-gallery-overview',
  templateUrl: './gallery-overview.component.html',
  styleUrls: ['./gallery-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryOverviewComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  constructor(private router: Router) {}

  ngOnInit() {}

  public goToPhotoView(imgSrc: string): void {
    this.router.navigate(['/photo-gallery/photo-viewer', { imgSrc }]);
  }
}
