import { EstatePage } from './app.po';

describe('estate App', () => {
  let page: EstatePage;

  beforeEach(() => {
    page = new EstatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
