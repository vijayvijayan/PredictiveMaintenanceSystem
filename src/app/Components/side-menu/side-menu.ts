import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
declare var $: any;
@Component({
  imports: [RouterLink],
  selector: 'app-side-menu',
  styleUrl: './side-menu.css',
  templateUrl: './side-menu.html',
})

export class SideMenu implements AfterViewInit {

  private initializeTreeview = (): void => {
    const treeview = $('[data-widget="treeview"]');

    if (treeview.length && !treeview.data('lte.treeview')) {
      treeview.Treeview('init');
    }
  };

  ngAfterViewInit(): void {
    if (document.readyState === 'complete') {
      this.initializeTreeview();
    } else {
      window.addEventListener(
        'load',
        this.initializeTreeview,
        { once: true }
      );
    }
  }
}
