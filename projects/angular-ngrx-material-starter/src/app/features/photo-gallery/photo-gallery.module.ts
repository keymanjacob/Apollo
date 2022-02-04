import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryOverviewComponent } from './gallery-overview/gallery-overview.component';
import { PhotoGalleryRoutingModule } from './photo-gallery-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { PhotoViewerComponent } from './photo-viewer/photo-viewer.component';

@NgModule({
  declarations: [GalleryOverviewComponent, PhotoViewerComponent],
  imports: [CommonModule, PhotoGalleryRoutingModule, SharedModule]
})
export class PhotoGalleryModule {}
