import Ember from 'ember'; 
// Use `import EmberObject from '@ember/object';` instead of using Ember.Objecteslintember/new-module-imports
// https://github.com/ember-cli/eslint-plugin-ember/blob/master/docs/rules/new-module-imports.md

export default Ember.Object.extend({
  init: function() {
    this._super();
    if (!this.get('victories')) {
      //Use ES5 getters (`this.property`) instead of Ember's `get` functioneslintember/no-get
      // https://github.com/ember-cli/eslint-plugin-ember/blob/master/docs/rules/no-get.md
      this.set('victories', []);
    }
  },
});
