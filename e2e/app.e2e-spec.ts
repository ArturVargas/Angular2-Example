import { AuthappPage } from './app.po';

describe('authapp App', () => {
  let page: AuthappPage;

  beforeEach(() => {
    page = new AuthappPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
