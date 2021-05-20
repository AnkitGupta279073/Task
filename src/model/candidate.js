const mongoose = require('mongoose');
const CandidateSchema = mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    }

});

const Candidate = mongoose.model('Candidate',CandidateSchema);
module.exports = Candidate;