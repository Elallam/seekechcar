import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { CommonService } from '../shared/services/common/common.service';
import { NavigationEnd, Router } from '@angular/router';
import { SidebarService } from '../shared/services/sidebar/sidebar.service';
import { routes } from '../shared/routes/routes';
import { routerlink } from '../shared/services/model/model';
import { DataService } from '../shared/services/data/data.service';
@Component({
  selector: 'app-feature-module',
  templateUrl: './feature-module.component.html',
  styleUrls: ['./feature-module.component.css'],
})
export class FeatureModuleComponent implements OnInit{
  public routes = routes;
  public footerActive = false;
  public headerActive = false;
  public strokeValue = 0;
  public progress = 0;
  showMiniSidebar = false;
  public miniSidebar = false;
  public expandMenu = false;
  public mobileSidebar = false;
  base = '';
  page = '';
  last = '';

  constructor(
    private common: CommonService,
    private router: Router,
    private sidebar: SidebarService,
    private data: DataService
  ) {
    router.events.subscribe((events: object) => {
      if (events instanceof NavigationEnd) {
        this.getRoutes(events);
      }
      if (events instanceof NavigationEnd) {
        this.mobileSidebar = false;
      }
      if (events instanceof NavigationEnd) {
        this.showMiniSidebar = false;
      }
    });
    this.sidebar.toggleSidebar.subscribe((res: string) => {
      if (res == 'true') {
        this.showMiniSidebar = true;
      } else {
        this.showMiniSidebar = false;
      }
    });
    {
      this.common.base.subscribe((res: string) => {
        this.base = res;
      });
      this.common.page.subscribe((res: string) => {
        this.page = res;
      });
      this.common.last.subscribe((res: string) => {
        this.last = res;
      });
    }
    this.getRoutes(this.router);
  }

  public getRoutes(events: routerlink) {
    const splitVal = events.url.split('/');
    this.common.base.next(splitVal[1]);
    this.common.page.next(splitVal[2]);
    this.common.last.next(splitVal[3]);
    if (
      events.url.split('/')[2] === 'maintenance' ||
      events.url.split('/')[2] === 'coming-soon' ||
      events.url.split('/')[2] === 'error404' ||
      events.url.split('/')[2] === 'error500' ||
      events.url.split('/')[2] === 'register' ||
      events.url.split('/')[2] === 'login' ||
      events.url.split('/')[2] === 'forgot-password' ||
      events.url.split('/')[2] === 'reset-password' ||
      events.url.split('/')[2] === 'logout'
    ) {
      this.footerActive = false;
      this.headerActive = false;
    } else {
      this.footerActive = true;
      this.headerActive = true;
    }
  }

  ngOnInit(): void {
    this.calculateScrollPercentage();
    Aos.init({
      duration: 1200,
      once: true,
    });
  }
  // scroll the page to top position
  public scrollToTop(): void {
    window.scrollTo(0, 0);
  }

  // function to calculate the scroll progress
  private calculateScrollPercentage(): void {
    window.addEventListener('scroll', () => {
      const body = document.body,
        html = document.documentElement;
      //gets the total height of page till scroll
      const totalheight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      // calculates the total stroke value
      this.progress = totalheight;
      const currentDistance = window.scrollY / (totalheight / 3000);
      // calculates the current stroke value
      this.strokeValue = totalheight - currentDistance / 8;
      // condition to hide scroll progress if page in top
      if (window.scrollY == 0) {
        this.strokeValue = totalheight;
      }
      // condition to make scroll progress to 100 if page in bottom
      if (window.innerHeight + window.scrollY >= totalheight) {
        this.strokeValue = 0;
      }
    });
  }
}
