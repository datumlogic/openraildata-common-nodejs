'use strict';

/**
 * @class
 * @desc A class for association data and helpful functions
 */
class Association {
  constructor(assoc) {
    this._payload = assoc || null;
  }

  /** 
   * @desc gets the association tiploc code
   * @returns {String|null} the tiploc code or null
   * @readonly
   */
  get tiploc() { return (this._payload) ? this._payload.tiploc : null; }
  /** 
   * @desc gets the association category
   * @returns {String|null} the category or null
   * @readonly
   */
  get category() { return (this._payload) ? this._payload.category : null; }

  /** 
   * @desc gets the main train information
   * @returns {Object|null} an object containing all of the main trains information or null
   * @readonly
   */
  get mainTrain() { return (this._payload) ? this._payload.main : null; }
  /** 
   * @desc gets the main train rid
   * @returns {String|null} the main trains rid
   * @readonly
   */
  get mainTrainId() { return (this._payload) ? this._payload.main.rid : null; }

  /** 
   * @desc gets the assoc train information
   * @returns {Object|null} an object containing all of the assoc trains information or null
   * @readonly
   */
  get assocTrain() { return (this._payload) ? this._payload.assoc : null; }
  /** 
   * @desc gets the assoc train rid
   * @returns {String|null} the assoc trains rid
   * @readonly
   */
  get assocTrainId() { return (this._payload) ? this._payload.assoc.rid : null; }

  /**
   * @method Association~isJoin
   * @desc checks to see if the association is a train join type
   * @returns {Boolean} 
   */
  isJoin() { return (this._payload && this._payload.category === 'JJ'); }
  /**
   * @method Association~isSplit
   * @desc checks to see if the association is a train split type
   * @returns {Boolean} 
   */
  isSplit() { return (this._payload && this._payload.category === 'VV'); }
  /**
   * @method Association~isNextTrain
   * @desc checks to see if the association is a next train type
   * @returns {Boolean} 
   */
  isNextTrain() { return (this._payload && this._payload.category === 'NP'); }
}

module.exports = Association;
