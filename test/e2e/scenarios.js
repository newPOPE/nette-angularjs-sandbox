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
    it('Modals click', function () {
      element('.nav-pills li:eq(2) a').click();
      expect(browser().location().url()).toBe('/modals');
    });
  });

  describe('Modals', function () {
    beforeEach(function () {
      browser().navigateTo('/src/www/#/modals');
    });

    describe('Run Alert modal', function () {
      it('Window must be visible', function () {
        element('#alert button').click();
        element('[alert] .modal-footer button').click();
        expect(element('#result .value').text()).toMatch(/You closed an Alert window!/);
      })
    });
  });
});
