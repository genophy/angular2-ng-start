import { Angular2startAotPage } from './app.po';

describe('angular2start-aot App', () => {
  let page: Angular2startAotPage;

  beforeEach(() => {
    page = new Angular2startAotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
