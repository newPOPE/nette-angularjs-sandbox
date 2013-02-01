'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Sandbox', function () {

  beforeEach(function() {
    browser().navigateTo('/src/www/');
  });

  describe('Index page', function () {
    it('Lists', function () {
      expect(element('h1').text()).toMatch(/Nette & AngularJS/);
    });
  });

  describe('Menu', function () {
    it('Test home click', function() {
      element('.nav-pills li:first a').click();
      expect(browser().location().url()).toBe('/');
    });
    it('List click', function() {
      element('.nav-pills li:eq(1) a').click();
      expect(browser().location().url()).toBe('/lists');
    });
  });
});
