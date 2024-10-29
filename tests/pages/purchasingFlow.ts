import { Page, Locator } from "@playwright/test";

export class PurchasingFlow {
  readonly page: Page;
  readonly btnAddToCart: Locator;
  readonly btnOpenCart: Locator;
  readonly btnCheckout: Locator;
  readonly inputFirstname: Locator;
  readonly inputLastname: Locator;
  readonly inputZipcode: Locator;
  readonly btnContinue: Locator;
  readonly btnFinish: Locator;
  readonly btnBurgerMenu: Locator;
  readonly btnLogout: Locator;

  constructor(page: Page) {
    this.page = page;
    this.btnAddToCart = page.locator(".btn_inventory");
    this.btnOpenCart = page.locator(".shopping_cart_link");
    this.btnCheckout = page.locator("#checkout");
    this.inputFirstname = page.locator("#first-name");
    this.inputLastname = page.locator("#last-name");
    this.inputZipcode = page.locator("#postal-code");
    this.btnContinue = page.locator("#continue");
    this.btnFinish = page.locator("#finish");
    this.btnBurgerMenu = page.locator("#react-burger-menu-btn");
    this.btnLogout = page.locator("#logout_sidebar_link");
  }

  async selectTwoItensAndGoToCart(indexItemOne: number, indexItemTwo: number) {
    await this.btnAddToCart.nth(indexItemOne).click();
    await this.btnAddToCart.nth(indexItemTwo).click();
    await this.btnOpenCart.click();
  }

  async inputBuyerInformation(firstname: string, lastname: string, zipcode: any) {
    await this.inputFirstname.fill(firstname);
    await this.inputLastname.fill(lastname);
    await this.inputZipcode.fill(zipcode);
    await this.btnContinue.click();
  }

  async logout(){
    await this.btnBurgerMenu.click();
    await this.btnLogout.click();
  }
}
