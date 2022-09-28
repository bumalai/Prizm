import { ZyfraUiRootModule } from '@digital-plant/zyfra-components';
import { NgModule, SecurityContext } from '@angular/core';
import { TuiAddonDocModule, TuiDocMainModule } from '@taiga-ui/addon-doc';
import { AppComponent } from './app.component';
import { GettingStartedComponent } from './documentation/getting-started/getting-started.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutes } from './app.routes';
import { TuiDataListModule, TuiLinkModule, TuiModeModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiSelectModule, TuiStringifyContentPipeModule, TuiStringifyPipeModule, TuiToggleModule } from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { APP_PROVIDERS } from './app.providers';
import { LogoModule } from './logo/logo.module';
import { VersionManagerModule } from './version-manager/version-manager.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutes,
    TuiTextfieldControllerModule,
    LogoModule,
    TuiDocMainModule,
    TuiAddonDocModule,
    TuiDataListModule,
    FormsModule,
    ReactiveFormsModule,
    TuiSelectModule,
    TuiStringifyContentPipeModule,
    TuiStringifyPipeModule,
    ZyfraUiRootModule,
    TuiToggleModule,
    TuiModeModule,
    TuiLinkModule,
    VersionManagerModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      sanitize: SecurityContext.NONE,
    }),
],
  declarations: [
    AppComponent,
    GettingStartedComponent,
  ],
  providers: [
    ...APP_PROVIDERS
  ],
})
export class AppModule {}
