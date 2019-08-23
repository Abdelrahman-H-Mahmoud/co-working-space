const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},

    userType: {
        type: String,
        enum : ['master','branch'],
        default: 'master'
    },
    
    mobile: {
		type: String,
		required: true
	},
    
    email: {
		type: String,
        required: true,
        unique:true
	},
    
    password: {
		type: String,
		required: true
    },
    
	firstTimeLogin: {
        type:Boolean,
        default:false
    }
});

export default mongoose.model('Users',userSchema);