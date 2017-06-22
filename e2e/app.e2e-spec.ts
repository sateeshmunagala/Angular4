import { WebDataPage } from './app.po';

describe('web-data App', () => {
  let page: WebDataPage;

  beforeEach(() => {
    page = new WebDataPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
