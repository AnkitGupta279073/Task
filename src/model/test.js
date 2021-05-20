const mongoose = require('mongoose');
const TestSchema = mongoose.Schema({

    candidate_id:{
        type:String,
        require:true
    },
    obtain_marks:{
        type:Number,
        require:true,
    },
    round:{
        type:Number,
        require:true
    }
});

const Test = mongoose.model('Test',TestSchema);
module.exports = Test;