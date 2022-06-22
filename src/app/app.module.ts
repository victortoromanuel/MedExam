import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpswComponent } from './forgotpsw/forgotpsw.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { GratisComponent } from './gratis/gratis.component';
import { CortoComponent } from './corto/corto.component';
import { LargoComponent } from './largo/largo.component';
import { EspecializacionComponent } from './especializacion/especializacion.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PagoComponent } from './pago/pago.component';
import { AnswersComponent } from './answers/answers.component';
import { PaginatePipe } from './pipe/paginate.pipe';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import { CustomMatPaginatorIntl } from "./paginator-es";
import { AdminLayoutRoutes } from "./layouts/admin-layout/admin-layout.routing";
import { AterrizajeComponent } from "./aterrizaje/aterrizaje.component";

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ForgotpswComponent,
    GratisComponent,
    CortoComponent,
    LargoComponent,
    EspecializacionComponent,
    FormularioComponent,
    PagoComponent,
    AnswersComponent,
    AterrizajeComponent,
    PaginatePipe,
    
  ],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    HttpClientModule,
    MatPaginatorModule,
  ],
  providers: [{
    provide: MatPaginatorIntl, 
    useClass: CustomMatPaginatorIntl
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
