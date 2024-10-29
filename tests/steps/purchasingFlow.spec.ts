import { test, expect } from "@playwright/test";
import { Login } from "../pages/login";
import { PurchasingFlow } from "../pages/purchasingFlow";
import LoginFixtures from "../fixtures/login.fixtures.json";
import BuyerData from "../data/buyer.data.json"

let loginPage: any;
let purchasingPage: any;
let url = "https://www.saucedemo.com/";

test.describe("Test Scenario - Purchasing Flow", () => {
  test.beforeEach(async ({ page }) => {
    loginPage = new Login(page);
    purchasingPage = new PurchasingFlow(page);

    await page.goto(url);
  });

  test("Test Case - User Should add items to card and successfully make a purchase", async () => {
    await loginPage.inputValidCredentialsAndLogin(
      LoginFixtures.username,
      LoginFixtures.password
    );
    await purchasingPage.selectTwoItensAndGoToCart(0, 1);
    await expect(purchasingPage.page).toHaveScreenshot('checkout.png'); // VisualRegression dos Itens adicionados ao carrinho
    await purchasingPage.btnCheckout.click();
    await purchasingPage.inputBuyerInformation(BuyerData.firstName, BuyerData.lastName, BuyerData.zipcode);
    await expect(purchasingPage.page).toHaveScreenshot('payment.png'); // VisualRegression validando as informaçōes da pagina de pagamentos, conforme pedido no teste
    await purchasingPage.btnFinish.click();
    await purchasingPage.logout();
    await expect(loginPage.logoLogin).toBeVisible();
  });
});
