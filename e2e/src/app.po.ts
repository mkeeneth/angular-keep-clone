import { browser, by, element } from "protractor";

export class AppPage {
  navigateTo() {
    return browser.get("/");
  }

  getTitleText() {
    return element(by.css("app-root app-header div mat-toolbar h3")).getText();
  }
}
