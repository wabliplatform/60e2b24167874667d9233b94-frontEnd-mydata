/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TempApi);
  }
}(this, function(expect, TempApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TempApi.VprojectsApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('VprojectsApi', function() {
    describe('createvprojects', function() {
      it('should call createvprojects successfully', function(done) {
        //uncomment below and update the code to test createvprojects
        //instance.createvprojects(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletevprojects', function() {
      it('should call deletevprojects successfully', function(done) {
        //uncomment below and update the code to test deletevprojects
        //instance.deletevprojects(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllvprojects', function() {
      it('should call getAllvprojects successfully', function(done) {
        //uncomment below and update the code to test getAllvprojects
        //instance.getAllvprojects(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getvprojects', function() {
      it('should call getvprojects successfully', function(done) {
        //uncomment below and update the code to test getvprojects
        //instance.getvprojects(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatevprojects', function() {
      it('should call updatevprojects successfully', function(done) {
        //uncomment below and update the code to test updatevprojects
        //instance.updatevprojects(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));