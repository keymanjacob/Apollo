import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import {
  routeAnimations,
  selectIsAuthenticated
} from '../../../core/core.module';

import { State } from '../examples.state';

@Component({
  selector: 'apollo-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplesComponent implements OnInit {
  isAuthenticated$: Observable<boolean> | undefined;

  examples = [
    { link: 'todos', label: 'apollo.examples.menu.todos' },
    { link: 'stock-market', label: 'apollo.examples.menu.stocks' },
    { link: 'theming', label: 'apollo.examples.menu.theming' },
    { link: 'crud', label: 'apollo.examples.menu.crud' },
    {
      link: 'simple-state-management',
      label: 'apollo.examples.menu.simple-state-management'
    },
    { link: 'form', label: 'apollo.examples.menu.form' },
    { link: 'notifications', label: 'apollo.examples.menu.notifications' },
    { link: 'elements', label: 'apollo.examples.menu.elements' },
    { link: 'authenticated', label: 'apollo.examples.menu.auth', auth: true }
  ];

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  }
}
