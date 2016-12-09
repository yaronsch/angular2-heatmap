import { Angular2HeatmapPage } from './app.po';

describe('angular2-heatmap App', function() {
  let page: Angular2HeatmapPage;

  beforeEach(() => {
    page = new Angular2HeatmapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
