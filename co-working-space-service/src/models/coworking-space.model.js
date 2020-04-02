const mongoose = require('mongoose');

const CoworkingSpaceSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	}, 
    description: {
		type: String,
	},
    
    logo: {
		type: String,
	},
    
    cover_photo: {
		type: String
    },
    branches:{
        type:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Branch' }]
    },
	user_id:{
        type:mongoose.Schema.Types.ObjectId
    }
});

module.exports= mongoose.model('Coworking-Space',CoworkingSpaceSchema);