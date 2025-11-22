const mongoose = require('mongoose');

const InsightSchema = new mongoose.Schema({
    title : {
        type: String,
        required : true
    },
    body : {
        type : String
    },
    tags : [{
        type : String
    }],
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true,
    }
    
},
// timestamps to analyze the time to activity
{timestamps : true}
);

module.exports = mongoose.model("Insight",InsightSchema);