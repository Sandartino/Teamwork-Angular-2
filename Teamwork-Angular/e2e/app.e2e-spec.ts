import { TeamworkAngularPage } from './app.po';

describe('teamwork-angular App', function() {
  let page: TeamworkAngularPage;

  beforeEach(() => {
    page = new TeamworkAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
