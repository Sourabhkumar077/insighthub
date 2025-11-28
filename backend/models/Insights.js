import { Schema, model } from 'mongoose';

const InsightSchema = new Schema({
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
        type : Schema.Types.ObjectId,
        ref : 'User',
        required : true,
    }
    
},
// timestamps to analyze the time to activity
{timestamps : true}
);

export default model("Insight",InsightSchema);