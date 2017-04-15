import { AnglarTourOfHeroesPage } from './app.po';

describe('anglar-tour-of-heroes App', () => {
  let page: AnglarTourOfHeroesPage;

  beforeEach(() => {
    page = new AnglarTourOfHeroesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
