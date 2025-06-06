import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslatePipe}  from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import {LanguageSwitcherComponent} from '../../../shared/components/language-switcher/language-switcher.component';
/**
 * Component for displaying and selecting a subscription plan.
 * Uses translation keys to render plan information.
 */
@Component({
  selector: 'app-plan-select',
  imports: [
    CommonModule,
    TranslatePipe,
    MatButtonModule,
    LanguageSwitcherComponent
  ],
  templateUrl: './plan-select.component.html',
  styleUrls: ['./plan-select.component.css']
})
export class PlanSelectComponent {
  /** List of available plans using translation keys */
  plans: any[] = [];
  /**
  * Initializes the component and loads available plans.
  *
  * @param translate - Service to handle i18n translations
  * @param router - Router for navigation
  */
  constructor(private translate: TranslateService,private router: Router) {
    this.loadPlans();
  }
  /**
   * Loads the available plans with translation keys.
   */
  loadPlans() {
    this.translate.get(['plan1', 'plan2', 'plan3']).subscribe(translations => {
      this.plans = [
        {
          subtitle: 'plan1.subtitle',
          title: 'plan1.title',
          price: 'plan1.price',
          benefits: [
            'plan1.benefit1',
            'plan1.benefit2',
            'plan1.benefit3',
            'plan1.benefit4'
          ],
        },
        {
          subtitle: 'plan2.subtitle',
          title: 'plan2.title',
          price: 'plan2.price',
          benefits: [
            'plan2.benefit1',
            'plan2.benefit2',
            'plan2.benefit3',
            'plan2.benefit4',
            'plan2.benefit5'
          ],
        },
        {
          subtitle: 'plan3.subtitle',
          title: 'plan3.title',
          price: 'plan3.price',
          benefits: [
            'plan3.benefit1',
            'plan3.benefit2',
            'plan3.benefit3',
            'plan3.benefit4',
            'plan3.benefit5',
            'plan3.benefit6'
          ],
        }
      ];
    });
  }

  /**
   * Handles plan selection and navigates to the organization route.
   */
  selectPlan() {
    this.router.navigate(['/organization']);
  }
}
