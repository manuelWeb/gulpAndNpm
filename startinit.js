console.log('Goooooo ;)')

var prompt = require('prompt');
var fs = require('fs');
var attrib = ['date','projectname'];
//
// Start the prompt
prompt.start();
// Get two properties from the user: username and email
prompt.get(attrib, function(err, result) {
  //
  // Log the results.
  //
  console.log('Command-line input received:');
  console.log('  date: ' + result.date);
  console.log('  projectname: ' + result.projectname);

  var resulta = './config.json'

  fs.writeFile("./config.json", JSON.stringify(result, null, 4), function(err) {
      if(err) {
          return console.log(err);
      }

      console.log("The file was saved!" + resulta);
  }); 
});
