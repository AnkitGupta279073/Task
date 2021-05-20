const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://root:root@cluster0.nfepc.mongodb.net/mernstack?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{console.log('connection successfully');}).catch((err)=>{console.log(err)});