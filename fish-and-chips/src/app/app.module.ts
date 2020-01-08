import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WelcomeLoginBtnComponent } from './welcome-login-btn/welcome-login-btn.component';
import { OperateComponent } from './operate/operate.component';
import { RegisterComponent } from './register/register.component';
import { OperateNavComponent } from './operate-nav/operate-nav.component';
import { CanvasComponent } from './canvas/canvas.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { AdvanceOperateComponent } from './advance-operate/advance-operate.component';
import { AdvanceOperateNavComponent } from './advance-operate-nav/advance-operate-nav.component';
import { OperateImageBoxComponent } from './operate-image-box/operate-image-box.component';
import { WelcomeGuideComponent } from './welcome-guide/welcome-guide.component';
import { AIDetectComponent } from './aidetect/aidetect.component';
import { GuideCommonComponent } from './guide-common/guide-common.component';
import { GuideAdvanceComponent } from './guide-advance/guide-advance.component';
import { StickerComponent } from './sticker/sticker.component';
import { AdvanceAccountComponent } from './advance-account/advance-account.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    WelcomeLoginBtnComponent,
    OperateComponent,
    RegisterComponent,
    OperateNavComponent,
    CanvasComponent,
    AccountComponent,
    AdminComponent,
    AdvanceOperateComponent,
    AdvanceOperateNavComponent,
    OperateImageBoxComponent,
    WelcomeGuideComponent,
    AIDetectComponent,
    GuideCommonComponent,
    GuideAdvanceComponent,
    StickerComponent,
    AdvanceAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
