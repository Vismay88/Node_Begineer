const fs=require('fs');
// Read file Sync Way
var textRead=fs.readFileSync('./read.txt','utf-8');  
console.log(textRead);

//Write File Sync Way
var writeFile=`Hi i am nice & today's date is:${Date.now()}`;
fs.writeFileSync('./write.txt',writeFile);

// Async-Way

fs.readFile('./read.txt','utf-8',(err,data)=>{
   if(err){
    return console.log("ERROR");
   }
  console.log(data);
  fs.writeFile('./write.txt',`\n${data}`,'utf-8',err=>{
    console.log("Written Success");
  })
});


