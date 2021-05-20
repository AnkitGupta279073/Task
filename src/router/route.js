const db = require('../db/conn');
const Candidate = require('../model/candidate');
const Test = require('../model/test');
const express = require('express');
const route = express.Router();

route.get('/',(req,res)=>{
    res.status(200).json({messsage:'all are good'});
});

route.post('/register',async (req,res)=>{
    const {name,email} = req.body;
    
    if(!name || !email)
    {
        res.status(422).json({error:'All fields are reuired'});
    }else{
            try{
                    const emailExit = await Candidate.findOne({email:email});
                    if(emailExit)
                    {
                        return res.status(422).json({message:"Email already exit"});
                    }
                    const User = new Candidate({name:name,email:email});
                    await User.save();
                    res.status(200).json({message:'Registration Successfully'});
            }catch(e){
                console.log(e);
                return res.status(500).json({error:e});
            }
    }
});

route.post('/test',async (req,res)=>{
    const {candidateid,obtain_marks,round} = req.body
    try {
        if(!candidateid || !obtain_marks || !round)
        {
            return res.status(422).json({error:'all fields are reuired'});
        }
        //find candidate id is exit or not
        const candidateExit = await Candidate.findById({_id:candidateid});
        if(candidateExit)
        {   
                // find candidate already has test marks or not
                const candidateTestRoundExit = await Test.findOne({candidate_id:candidateid,round:round});
                if(candidateTestRoundExit)
                {   
                    return res.status(422).json({message:`candidate already has obtain marks for this ${round} round`});
                }else if(obtain_marks > 10){
                           return res.status(422).json({message:'marks should be in out of 10'});
                }else{
                        const Testt = new Test({candidate_id:candidateid,obtain_marks:obtain_marks,round:round});
                        await Testt.save();
                        return res.status(200).json({message:'marks given successfully'});
                }
        }else{

                return res.status(400).json({error:'candidate id does not exit'});
        }
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({error:error});
        
        
    }
    
});

module.exports = route;
