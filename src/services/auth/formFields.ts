import {Page} from "puppeteer";

export const formFields = async (page: Page) => {
  const userName = await page.$('input[name="username"]');
  const password = await page.$('input[name="password"]');
  const loginButton = await page.$('#button-login');

  return {userName, password, loginButton}
}