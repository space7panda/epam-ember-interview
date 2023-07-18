import Ember from 'ember';
import { computed } from '@ember/object';

// Use `import EmberObject from '@ember/object';` instead of using Ember.Objecteslintember/new-module-imports
// https://github.com/ember-cli/eslint-plugin-ember/blob/master/docs/rules/new-module-imports.md

export default Ember.Object.extend({
  victories: computed(function () {
    return [];
  }),
});
