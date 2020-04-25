import { Routes } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component';
import { GridComponent } from './grid/grid.component';
import { ListsComponent } from './lists/lists.component';
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { ChipsComponent } from './chips/chips.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProgressSnipperComponent } from './progress-snipper/progress-snipper.component';
import { ProgressComponent } from './progress/progress.component';
import { DialogComponent } from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';

export const MaterialRoutes: Routes = [
  {
    path: 'button',
    component: ButtonsComponent, data: {
      breadcrumb: 'Buttons'
    }
  },
  {
    path: 'grid',
    component: GridComponent, data: {
      breadcrumb: 'Grid'
    }
  },
  {
    path: 'lists',
    component: ListsComponent, data: {
      breadcrumb: 'Lists'
    }
  },
  {
    path: 'menu',
    component: MenuComponent, data: {
      breadcrumb: 'Menu'
    }
  },
  {
    path: 'tabs',
    component: TabsComponent, data: {
      breadcrumb: 'Tabs'
    }
  },
  {
    path: 'stepper',
    component: StepperComponent, data: {
      breadcrumb: 'Stepper'
    }
  },
  {
    path: 'expansion',
    component: ExpansionComponent, data: {
      breadcrumb: 'Expansion'
    }
  },
  {
    path: 'chips',
    component: ChipsComponent, data: {
      breadcrumb: 'Chips'
    }
  },
  {
    path: 'toolbar',
    component: ToolbarComponent, data: {
      breadcrumb: 'Toolbar'
    }
  },
  {
    path: 'progress-snipper',
    component: ProgressSnipperComponent, data: {
      breadcrumb: 'Progress Snipper'
    }
  },
  {
    path: 'progress',
    component: ProgressComponent, data: {
      breadcrumb: 'Progress'
    }
  },
  {
    path: 'dialog',
    component: DialogComponent, data: {
      breadcrumb: 'Dialog'
    }
  },
  {
    path: 'tooltip',
    component: TooltipComponent, data: {
      breadcrumb: 'Tooltip'
    }
  },
  {
    path: 'snackbar',
    component: SnackbarComponent, data: {
      breadcrumb: 'Snackbar'
    }
  },
  {
    path: 'slider',
    component: SliderComponent, data: {
      breadcrumb: 'Slider'
    }
  },
  {
    path: 'slide-toggle',
    component: SlideToggleComponent, data: {
      breadcrumb: 'Slide Toggle'
    }
  }
];
