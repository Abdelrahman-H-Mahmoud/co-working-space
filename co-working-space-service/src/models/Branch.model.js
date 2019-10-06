const mongoose = require('mongoose');

const BranchSchema = mongoose.Schema({
    location: {
        type: {
            type: String, 
            enum: ['Point'],
        },
        coordinates: {
            type: [Number],
        }
    },
    address: {
        country: { type: String, required: true },
        city: { type: String, required: true },
        street: { type: String, required: true }
    },
    gallary: [String],
    benefits: [{
        icon: { type: String },
        text: { type: String }
    }],
    max_capcity: { type: Number, required: true },
    rooms: [
        {
            name: { type: String, required: true },
            capcity: { type: Number },
            hourly_rate: {
                price: { type: Number, required: true },
                visible: { type: Boolean, default: true }
            },
            benefits: [{
                icon: { type: String },
                text: { type: String }
            }]
        }
    ],
    hourly_rate: {
        price: { type: Number, required: true },
        visible: { type: Boolean, default: true }
    },
    coworking_space_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'Coworking-Space' }
});

module.exports = mongoose.model('Branch', BranchSchema);