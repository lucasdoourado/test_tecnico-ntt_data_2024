import { Page, Locator } from "@playwright/test";

export class Login {
  readonly page: Page;
  readonly inputUsername: Locator;
  readonly inputPassword: Locator;
  readonly btnLogin: Locator;
  readonly logoLogin: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inputUsername = page.locator("#user-name");
    this.inputPassword = page.locator("#password");
    this.btnLogin = page.locator("#login-button");
    this.logoLogin = page.locator(".login_logo");
  }

  async inputValidCredentialsAndLogin(user: string, pass: string) {
    await this.inputUsername.fill(user);
    await this.inputPassword.fill(pass);
    await this.btnLogin.click();
  }
}
