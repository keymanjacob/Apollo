import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryOverviewComponent } from './gallery-overview/gallery-overview.component';
import { PhotoViewerComponent } from './photo-viewer/photo-viewer.component';

const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  {
    path: 'overview',
    component: GalleryOverviewComponent,
    data: { title: 'omni-web-lonestar.menu.photoGallery' }
    /* children: [
      {
        path: 'photo-viewer',
        component: PhotoViewerComponent
      }
    ]*/
  },
  {
    path: 'photo-viewer',
    component: PhotoViewerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoGalleryRoutingModule {}
