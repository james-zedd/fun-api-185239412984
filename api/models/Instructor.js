const mongoose = require('mongoose');
const InstructorSchema = mongoose.Schema({
    name: {
        given: {
            type: String
        },
        family: {
            type: String
        },
        nickname: {
            type: String
        }
    },
    gender: {
        type: String,
        enum: ['male','female'],
        required: true
    },
    contact: {
        phone: {
            type: String,
            required: true
        },
        email: {
            work: {
                type: String
            },
            personal: {
                type: String
            }
        },
        address: {
            line_1: {
                type: String
            },
            line_2: {
                type: String
            },
            city: {
                type: String
            },
            province: {
                type: String
            },
            postal_code: {
                type: String
            }
        }
    },
    isPT: {
        type: Boolean
    }
});

module.exports = mongoose.model('instructor', InstructorSchema);