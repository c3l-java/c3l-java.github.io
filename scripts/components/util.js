define('util', {
  inspect: function(value, concise){
    if(value == null){
      return "(null)";
    }
    
    if(typeof value == "object"){
      if(value.toString == Array.prototype.toString){
        if(concise){
          return "[&hellip;]";
        }
        
        var resultingString = "";
        
        for(var i = 0; i < value.length; i++){
          if(i > 0){
            resultingString += ",";
          }
          
          resultingString += this.customToString(value[i], true);
        }
        
        return "[" + resultingString + "]";
      } else {
        if(concise){
          return "{&hellip;}";
        }
        
        var resultingString = "";
        var i = 0;
        
        $.each(value, function(propertyName, propertyValue){
          if(i++ > 0){
            resultingString += ",";
          }
          
          resultingString += propertyName + ":" + this.customToString(propertyValue, true);
        });
        
        return "{" + resultingString + "}";
      }
    } else {
      if(typeof value == "string"){
        if(value == ""){
          return "(empty)";
        } else {
          if(value.indexOf("http://") == 0){
            return value;
          } else {
            return "\"" + value + "\"";
          }
        }
      } else {
        return "" + value;
      }
    }
  }
});