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

import ApiClient from '../ApiClient';

/**
 * The Vprojects model module.
 * @module model/Vprojects
 * @version 1.0.0
 */
class Vprojects {
    /**
     * Constructs a new <code>Vprojects</code>.
     * @alias module:model/Vprojects
     * @param prName {String} 
     * @param prSDate {Date} 
     * @param prEDate {Date} 
     * @param prFunding {Number} 
     */
    constructor(prName, prSDate, prEDate, prFunding) { 
        
        Vprojects.initialize(this, prName, prSDate, prEDate, prFunding);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, prName, prSDate, prEDate, prFunding) { 
        obj['prName'] = prName;
        obj['prSDate'] = prSDate;
        obj['prEDate'] = prEDate;
        obj['prFunding'] = prFunding;
    }

    /**
     * Constructs a <code>Vprojects</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Vprojects} obj Optional instance to populate.
     * @return {module:model/Vprojects} The populated <code>Vprojects</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Vprojects();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('prName')) {
                obj['prName'] = ApiClient.convertToType(data['prName'], 'String');
            }
            if (data.hasOwnProperty('prSDate')) {
                obj['prSDate'] = ApiClient.convertToType(data['prSDate'], 'Date');
            }
            if (data.hasOwnProperty('prEDate')) {
                obj['prEDate'] = ApiClient.convertToType(data['prEDate'], 'Date');
            }
            if (data.hasOwnProperty('prFunding')) {
                obj['prFunding'] = ApiClient.convertToType(data['prFunding'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} _id
 */
Vprojects.prototype['_id'] = undefined;

/**
 * @member {String} prName
 */
Vprojects.prototype['prName'] = undefined;

/**
 * @member {Date} prSDate
 */
Vprojects.prototype['prSDate'] = undefined;

/**
 * @member {Date} prEDate
 */
Vprojects.prototype['prEDate'] = undefined;

/**
 * @member {Number} prFunding
 */
Vprojects.prototype['prFunding'] = undefined;






export default Vprojects;

