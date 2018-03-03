import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {CoursesComponent} from './courses/courses.component';
import { PeopleComponent } from './people/people.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CoursesComponent, PeopleComponent, HeaderComponent, IntroComponent, SkillsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
