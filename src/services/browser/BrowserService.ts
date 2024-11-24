import puppeteer, { Browser, Page } from 'puppeteer';
import {config} from "../../config/puppeteer";

export class BrowserService {
  private browser: Browser | null = null;

  async init(): Promise<void> {
    try{
      this.browser = await puppeteer.launch(config)
      console.log(`Успешное создание браузера с настроками: ${config}`)
    }catch(err){
      console.log('Не удалось создать браузер')
      console.log(err)
    }
  }

  async openPage(url: string): Promise<Page> {
    if(!this.browser){
      throw new Error('Браузер не создался, попробуй еще раз')
    }

    const page = await this.browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });
    return page;
  }

  async close(): Promise<void> {
    if (this.browser) {
      await this.browser.close();
    }
  }
}