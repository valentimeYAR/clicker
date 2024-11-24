import {Page} from "puppeteer";
import {AUTH_DATA} from "../../common";
import {formFields} from "./formFields";

export const loginService = async (page: Page) => {
  const {userName, password, loginButton} = await formFields(page)

  await userName?.type(AUTH_DATA.LOGIN)
  await password?.type(AUTH_DATA.PASSWORD)
  await loginButton?.click()
}