var problems = [
{
  id:1,
  name:"2 Sum",
  desc:"add two num",
  difficulty:"easy"
},

{
  id:2,
  name:"3 Sum",
  desc:"add three num",
  difficulty:"medium"
},
{
  id:3,
  name:"4 Sum",
  desc:"add four num",
  difficulty:"hard"
},
{
  id:4,
  name:"4 Sum",
  desc:"add four num",
  difficulty:"super"
},
{
  id:5,
  name:"5 Sum",
  desc:"add four num",
  difficulty:"super"
}

];

var ProblemModel = require("../models/problemModel");

var getProblems = function(){
  return new Promise((resolve, reject) =>{
    ProblemModel.find({}, function(err, problems){
      if (err) {
        reject(err);
      }else{
        resolve(problems);
      }
    });
  });
}

var getProblem = function(id){
  return new Promise((resolve, reject) =>{
    ProblemModel.findOne({id: id}, function(err, problem){
      if (err) {
        reject(err);
      }else{
        resolve(problem);
      }
    });
  });
}

var addProblem = function(newProblem){
  return new Promise((resolve, reject) =>{
    ProblemModel.findOne({name: newProblem.name}, function(err, problem){
      if (problem) {
        reject("Problem name already exists");
      }else{
        ProblemModel.count({}, function(err, num){
          newProblem.id = num + 1;
          var mongoProblem = new ProblemModel(newProblem);
          mongoProblem.save();
          resolve(newProblem);
        });
      }
    });
  });
}

module.exports = {
  getProblems:getProblems,
  getProblem:getProblem,
  addProblem:addProblem
}
