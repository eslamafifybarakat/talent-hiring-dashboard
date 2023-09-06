import { LanguageSelectorComponent } from './components/header/components/language-selector/language-selector.component';
import { UserInfoComponent } from './components/header/components/user-info/user-info.component';
import { OverlayLoadingComponent } from './components/overlay-spinner/overlay-loading.component';
import { BrowseImageOrVideoComponent } from './components/browse-image-or-video/browse-image-or-video.component';
import { ConfirmDeleteComponent } from './components/confirm-delete/confirm-delete.component';
import { UploadButtonComponent } from './components/upload-button/upload-button.component';
import { ThemeComponent } from './components/header/components/theme/theme.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { AngMaterialModule } from './modules/ang-material/ang-material.module';
import { AvatarComponent } from './components/avatar/avatar.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from './modules/prime-ng/prime-ng.module';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClickOutsideModule } from 'ng-click-outside';
import { NotificationComponent } from './components/header/components/notification/notification.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SkeletonComponent } from './components/skeleton/skeleton.component';


const allSharedComponents = [
  LanguageSelectorComponent,
  OverlayLoadingComponent,
  ConfirmDeleteComponent,
  UploadButtonComponent,
  UploadImageComponent,
  FileUploadComponent,
  BreadcrumbComponent,
  CountdownComponent,
  UserInfoComponent,
  HeaderComponent,
  FooterComponent,
  AvatarComponent,
  SearchComponent,
  ThemeComponent,
  BrowseImageOrVideoComponent,
  HeaderComponent,
  FooterComponent,
  NotificationComponent,
  SkeletonComponent,
]
const allSharedModule = [
  ReactiveFormsModule,
  ClickOutsideModule,
  AngMaterialModule,
  TranslateModule,
  PrimeNgModule,
  FormsModule,
]

@NgModule({
  declarations: [
    ...allSharedComponents,

  ],
  imports: [
    CommonModule,
    ...allSharedModule
  ],
  exports: [
    ...allSharedComponents,
    ...allSharedModule
  ]
})
export class SharedModule { }
