/**
 * Articles.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'mysql',

  attributes: {

    title: {
      type: 'string',
      allowNull: true
    },

    body: {
      type: 'string',
      allowNull: true
    },

  },

};

