function flatten(value){
    if(typeof value !== 'object' || value === null){
        return value
      } else if(Array.isArray(value)){
        return flattenArr(value)
      } else{
        return flattenObj(value)
      }
}

function flattenObj(obj){
    let flattenedObj = {}
    for (let key in obj){
        if(Array.isArray(obj[key])){
            flattenedObj[key] = flattenArr(obj[key])
        }
       else if(typeof obj[key] === 'object' && obj[key] !== null){
            Object.assign(flattenedObj, flattenObj(obj[key])) 
        } else{
           flattenedObj[key] = obj[key]
        }  
    }
    return flattenedObj
}

function flattenArr(arr){
    let flattenedArray = [];

    for(let value of arr){
        if(Array.isArray(value)){
           flattenedArray = flattenedArray.concat(flattenArr(value))
        }else if (typeof value === "object"){
           flattenedArray.push(flattenObj(value))
        } else{
            flattenedArray.push(value)
        }
    }
    return flattenedArray
}