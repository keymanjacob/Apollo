import { browser, by, element } from 'protractor';

export class TodosPage {
  navigateTo() {
    return browser.get('#/examples/todos');
  }

  getInput() {
    return element(by.css('apollo-big-input input'));
  }

  getAddTodoButton() {
    return element(by.css('apollo-big-input-action button'));
  }

  getResults() {
    return element.all(by.css('mat-card.todo'));
  }
}
