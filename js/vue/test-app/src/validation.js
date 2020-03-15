/********************
 *  Coded By Davoleo
 ********************/

import Vue from 'vue'

Vue.component('MyComponent', {
    props: {
        //Type control - (null is the jolly type)
        propA: Number,

        //Multiple possible types
        propB: [String, Number],

        //REQUIRED String type
        propC: {
            type: String,
            required: true
        },

        //Number type with a default value
        propD: {
            type: Number,
            default: 100
        },

        //Object with default values
        propE: {
            type: Object,
            //object or arrays MUST be the return type of a function (they can't be passed directly)
            default: function () {
                return { message: 'hello'}
            }
        },

        //Custom Validation function
        propF: {
            validator: function (value) {
                //the value has to be one of these strings
                return ['success', 'warning', 'danger'].indexOf(value) !== -1
            }
        }
    }
});
