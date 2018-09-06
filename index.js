var line = []
var ticketNumber = 0

function takeANumber(currentLine){
  currentLine.push(currentLine.length + 1);
  ticketNumber += 1;
  console.log(` You are ticket number ${ticketNumber}; you are number ${currentLine.length} in line.`);
}

function nowServing(currentLine){
  if (currentLine.length !== 0) {
    var announcement = `Currently serving ${ticketNumber}.`;
    currentLine.splice(0,1);
    console.log(announcement);
    
  }else{
    console.log("There is nobody waiting to be served!");
  }
}

function currentLine(currentLine){
  var announcement = ""
  if(currentLine.length !== 0){
    announcement = "The line is currently: "
    for (let i = 0; i < currentLine.length; i++){
      announcement += `${i + 1}. ${currentLine[i]}`;
      if (i < currentLine.length - 1){
        announcement += `, `
      }
    }
  }else{
    announcement = "The line is currently empty.";
  }
  return announcement;
}

takeANumber(line)
takeANumber(line)
nowServing(line)
nowServing(line)
console.log(line)
takeANumber(line)
nowServing(line)
