function find(array, callback) {
    
 
    for (var i = 0; i < array.length; i++) {
        var element = array[i]

       var returnCallbackValue = callback(element)

        if(returnCallbackValue)
            return element


         }
    return undefined;
}