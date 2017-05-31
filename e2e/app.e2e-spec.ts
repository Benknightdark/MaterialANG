import { MaterialngPage } from './app.po';

describe('materialng App', () => {
  let page: MaterialngPage;

  beforeEach(() => {
    page = new MaterialngPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
