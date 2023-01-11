const workoutService= require("../services/workoutService")

const getAllWorkouts = (req,res)=>{
  const allWorkouts = workoutService.getAllWorkouts();
  res.send({status:"OK", data: allWorkouts});
}

const getOneWorkout =  (req,res)=>{
    const workout = workoutService.getOneWorkout(req.params.workoutId)
    res.send(`Get workout ${req.params.workoutId}`);
}

const createWorkout =  (req,res)=>{
    const createWorkout= workoutService.createNewWorkout();
    res.send(`create workout ${req.params.workoutId}`);
}
const updateOneWorkout =  (req,res)=>{
    const updateWorkout = workoutService.updateOneWorkout(req.params.workoutId)
    res.send(`Update workout ${req.params.workoutId}`);
}
const deleteOneWorkout =  (req,res)=>{
    const deleteWorkout = workoutService.deleteOneWorkout(req.parmas.workoutId)
    res.send(`Delete workout ${req.params.workoutId}`);
}

let array = [1,2,0,4];
let array2 = [4,5,6,7]

const UpDown = (arr) => {
let swap = false
for(let i = 0;i<arr.length;i++){
   if(arr[i]<arr[i+1] && arr[i+1] > arr[i+2]){
    swap = true;
   } else{
    swap = false;
   }
   
 }
console.log(swap);
}

UpDown( [1,2,0,4])

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createWorkout,
    updateOneWorkout,
    deleteOneWorkout
}