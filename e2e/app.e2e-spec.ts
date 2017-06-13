import { ChooseYourOwnAdventurePage } from './app.po';

describe('choose-your-own-adventure App', () => {
  let page: ChooseYourOwnAdventurePage;

  beforeEach(() => {
    page = new ChooseYourOwnAdventurePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
