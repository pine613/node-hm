/**
 * Prefecture
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  attributes: {
    _id: {
      type: 'integer'
    },
    
    name: {
      type: 'string',
      required: true,
    },
    
    menu: {
      type: 'array',
      defaultsTo: [],
    },
  	/* e.g.
  	nickname: 'string'
  	*/
    
  }

};
