import { Angular.Login.SeedPage } from './app.po';

describe('angular.login.seed App', () => {
  let page: Angular.Login.SeedPage;

  beforeEach(() => {
    page = new Angular.Login.SeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
