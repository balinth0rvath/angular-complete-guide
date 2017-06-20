import { AngularCompleteGuidePage } from './app.po';

describe('angular-complete-guide App', () => {
  let page: AngularCompleteGuidePage;

  beforeEach(() => {
    page = new AngularCompleteGuidePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
