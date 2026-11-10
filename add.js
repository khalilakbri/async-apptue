// put your promise inside a function
function add(a,b){
    const mypromise = new Promise((resolve,reject)=>{
        //heavy task that take more time
        if(typeof a == "number" && typeof b == "number"){
            resolve(a+b)
        }else{
            reject("Please provide only number.")
        }
    })
    return mypromise
}

export default add