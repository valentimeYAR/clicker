import {BrowserService} from "./services/browser/BrowserService";
import {LOGIN_PAGE} from "./common";
import {loginService} from "./services/auth/loginService";

(async () => {
  const puppeteerService = new BrowserService();
  await puppeteerService.init();

  const page = await puppeteerService.openPage('https://twiron.com/view_surfing?sid=GcUAtmz9w7i9RKk0nMm7mW%2BfrL%2Bohx%2ByndiNg4KHUSSTB7UKqvGIHKhntr6m%2FXciTrlenIfxhRPwQJHy8vwNeNsj&id=66517');
  const frame = await page.waitForFrame(frame => frame.name() === 'frminfo');
  console.log(await frame.content());
  // await loginService(page)

  // await puppeteerService.close();
})();
