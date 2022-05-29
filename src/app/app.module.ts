import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { IonicModule } from '@ionic/angular';
import { PerfilComponent } from './perfil/perfil.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';

import { TabsComponent } from './tabs/tabs.component';

import { PublicacionComponent } from './publicacion/publicacion.component';

import { FormsModule } from '@angular/forms';
import { RoutesModule } from './routes.module';

import { PopoverContentComponent } from './popover-content/popover-content.component';
import { HistoriasComponent } from './historias/historias.component';
import { HistoriaContenidoComponent } from './historia-contenido/historia-contenido.component';

//WIP
import { environment } from 'src/environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PopoverComponent } from './popover/popover.component';
import { PostComponent } from './post/post.component';

import { ReactiveFormsModule } from '@angular/forms';
import { initializeApp , provideFirebaseApp} from '@angular/fire/app';

import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
//GUARDS

//Auth
//import { SETTINGS as AUTH_SETTINGS } from '@angular/fire/compat/auth';
//import { MyGuard } from './guards/my-guard';
//import { AuthComponent } from './auth/auth.component';


//Cloud Storage - Firease
import { AngularFireStorageModule, BUCKET } from '@angular/fire/compat/storage';
//import { PublicarComponent } from './publicar/publicar.component';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [
	AppComponent,
	FeedComponent,
	PerfilComponent,
	TabsComponent,
	PopoverContentComponent,
	PopoverComponent,
	HistoriasComponent,
	HistoriaContenidoComponent,
	PublicacionComponent,
	PostComponent,
	PublicacionesComponent/*, 
	AuthComponent, 
	PublicarComponent*/
  ],
  imports: [
	BrowserModule,
	ReactiveFormsModule,
	FormsModule,
	HttpClientModule,
	AppRoutingModule,
	IonicModule.forRoot(),
	provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
	provideFirestore(() => getFirestore()),
	AngularFireDatabaseModule,
	RoutesModule, 
	AngularFireStorageModule
  ],
  providers: [
	AngularFireDatabase,
	/*{ provide: AUTH_SETTINGS, useValue: { appVerificationDisabledForTesting: true } },
	MyGuard,*/
	{ provide: BUCKET, useValue: 'my-bucket-name' } ,//bucket fire storage, 
	{ provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig }
  ],
  bootstrap: [AppComponent], 
  exports: [RoutesModule]
})
export class AppModule { }