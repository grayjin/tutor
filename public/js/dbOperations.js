var exports = module.exports = {};


exports.register = function(req,res) {
    
      var pg = require('pg');
        var conString = process.env.DATABASE_URL || "postgres://tzhfypihrazkoz:Llg9l7d_ULPBPxCk1HREaJoQwc@ec2-54-197-241-239.compute-1.amazonaws.com:5432/d8o7r39dmedqhr?ssl=true";
        var client = new pg.Client(conString);
        client.connect();  
        var query = client.query("SELECT 1 FROM STUDENTS stu WHERE 1=1 AND stu.STUDENTID = $1 AND stu.NAME = $2",[req.query.id, req.query.name], function(err,result){
           
            if (result.rows.length <1){
             exports.registerStudent(req,res);
            exports.registerTutor(req,res);
            }
        });
    
    query.on("end", function(){
    client.end();
    });
    
    
};

exports.registerStudent = function(req,res){
     console.log('goodbye world');
        
     var pg = require('pg');           
        var conString = process.env.DATABASE_URL || "postgres://tzhfypihrazkoz:Llg9l7d_ULPBPxCk1HREaJoQwc@ec2-54-197-241-239.compute-1.amazonaws.com:5432/d8o7r39dmedqhr?ssl=true";
        var client = new pg.Client(conString);
        client.connect();         
        var query = client.query("INSERT INTO STUDENTS (STUDENTID, NAME, LOCID) VALUES ($1, $2, 5);", [req.query.id, req.query.name], function(err,result){
            if(err){
                    res.send(JSON.stringify(err));
                    console.log(err);
        }});    
       
      query.on("end", function(){
    client.end();
    });
    


};

exports.registerTutor = function(req,res){
    
    
        console.log('goodbye world');
        
     var pg = require('pg');           
        var conString = process.env.DATABASE_URL || "postgres://tzhfypihrazkoz:Llg9l7d_ULPBPxCk1HREaJoQwc@ec2-54-197-241-239.compute-1.amazonaws.com:5432/d8o7r39dmedqhr?ssl=true";
        var client = new pg.Client(conString);
        client.connect();         
        var query = client.query("INSERT INTO TUTORS (TUTORID, NAME, LOCID) VALUES ($1, $2, 5);", [req.query.id, req.query.name], function(err,result){
            if(err){
                    res.send(JSON.stringify(err));
                    console.log(err);
        }});    
        query.on("end", function(){
    client.end();
    });
    
    
};
















    
    
    
    