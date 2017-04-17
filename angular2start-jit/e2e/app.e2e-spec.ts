import { Angular2startPage } from './app.po';

describe('angular2start App', () => {
  let page: Angular2startPage;

  beforeEach(() => {
    page = new Angular2startPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
