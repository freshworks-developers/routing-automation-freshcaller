exports = {
  validateVIPPhoneNumber: function (args) { 
    console.log(args);
    // let validVIPNumbers = ['+15684561239','+12587419632'],
    // response = validVIPNumbers.includes(args.input) ? 'valid': 'invalid',
    data = {
      response: "valid",
      "app_variables": {}
    };
    
    return renderData(null, { data: "valid" });
  },
  validateUserSingleDigit: function (args) {
    console.log(args);
    let validVIPNumbers = ['1','2'],
    response = validVIPNumbers.includes(args.input) ? 'valid': 'invalid';
    // Third party API and response structure
    return renderData(null, { success: true, data: {
      response,
      "app_variables": {}
    }});
  },
  validateUserMultipleDigits: function (args) {
    console.log(args);
    let validVIPNumbers = ['11','12'],
    response = validVIPNumbers.includes(args.input) ? 'valid': 'invalid';
    
    return renderData(null, { success: true, data: {
      response,
      "app_variables": {}
    }});
  },
  validateUserSpeech: function (args) {
    console.log(args);
    let regex = /(transfer)|(call)/,
    response = regex.test(args.input) ? 'valid': 'invalid';
    
    return renderData(null, { success: true, data: {
      response,
      "app_variables": {}
    }});
  },
  respondOrderStatus: function (args) { 
    console.log('respondOrderStatus', args);
    
    let name = ['Freshcaller', "Freshdesk", "Freshsales", "Freshchat", "Freshservice"],
      response = name[Number.parseInt(args.input)];
      
    console.log('response is', response)
    
    return renderData(null, {
      success: true, data: { 
      response, "app_variables": { "name": name[Number.parseInt(args.input)], status: "in progress"}
     }});
  }
};
