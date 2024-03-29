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


import ApiClient from './ApiClient';
import Vprojects from './model/Vprojects';
import VprojectsApi from './api/VprojectsApi';


/**
* This_is_a_sample_openApi_document.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var TempApi = require('index'); // See note below*.
* var xxxSvc = new TempApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new TempApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new TempApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new TempApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Vprojects model constructor.
     * @property {module:model/Vprojects}
     */
    Vprojects,

    /**
    * The VprojectsApi service constructor.
    * @property {module:api/VprojectsApi}
    */
    VprojectsApi
};

export default {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Vprojects model constructor.
     * @property {module:model/Vprojects}
     */
    Vprojects,

    /**
    * The VprojectsApi service constructor.
    * @property {module:api/VprojectsApi}
    */
    VprojectsApi
};
