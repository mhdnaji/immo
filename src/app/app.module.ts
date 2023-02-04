import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './layout/app-layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layout/app-layout/main-layout/main-layout.component';
import { ImmoAuthLayoutComponent } from './immo/immo-layout/immo-app-layout/immo-auth-layout/immo-auth-layout.component';
import { ImmoMainLayoutComponent } from './immo/immo-layout/immo-app-layout/immo-main-layout/immo-main-layout.component';
import { ImmoHeaderComponent } from './immo/immo-layout/immo-header/immo-header.component';
import { ImmoPageLoaderComponent } from './immo/immo-layout/immo-page-loader/immo-page-loader.component';
import { ImmoSidebarComponent } from './immo/immo-layout/immo-sidebar/immo-sidebar.component';
import { ImmoRightSidebarComponent } from './immo/immo-layout/immo-right-sidebar/immo-right-sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { PageLoaderComponent } from './layout/page-loader/page-loader.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { RightSidebarComponent } from './layout/right-sidebar/right-sidebar.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { fakeBackendProvider } from './core/interceptor/fake-backend';
import { ErrorInterceptor } from './core/interceptor/error.interceptor';
import { JwtInterceptor } from './core/interceptor/jwt.interceptor';
import { ClickOutsideModule } from 'ng-click-outside';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
//import { BienComponent } from './bien/bien.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    ImmoMainLayoutComponent,
    ImmoAuthLayoutComponent,
    ImmoHeaderComponent,
    ImmoPageLoaderComponent,
    ImmoSidebarComponent,
    ImmoRightSidebarComponent,
    MainLayoutComponent,
    HeaderComponent,
    PageLoaderComponent,
    SidebarComponent,
    RightSidebarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ClickOutsideModule,
    NgScrollbarModule,
    LoadingBarRouterModule,
    CoreModule,
    SharedModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
