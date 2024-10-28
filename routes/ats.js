const express = require('express');
const router = express.Router();
const vendorService = require('../modules');

module.exports = router;

// ATS API Callouts

// Candidate
router.get('/candidate/sendresume',(req,res) =>{

    res.write(req.url)
    res.end();
    
}),

router.get('/candidate/apply',(req,res) =>{

    res.write(req.url)
    res.end();
    
}),

router.get('/candidate/checkapplystatus',(req,res) =>{

    res.write(req.url)
    res.end();
    
}),

// Candidate callbacks (public)
router.get('/candidate/applystatuscallback',(req,res) =>{

    res.write(req.url)
    res.end();
    
}),

// Jobs


router.get('/job/viewalljobs',(req,res) =>{

    res.write(req.url)
    res.end();
    
}),
    
router.get('/job/view/:id',(req,res) =>{

    const data = vendorService.getJob(req.params.id);
    //const data = vendorService.viewJob(req.id);
    //res.json({ data }); 

    res.write(req.url)
    //console.log(req.params.id);
    res.end();
    
})

 