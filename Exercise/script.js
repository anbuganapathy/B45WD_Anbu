let fs=require("fs");
// const quote="Live more, worry less";
// fs.writeFile("./sample.html",quote,(err)=>{
//     console.log("created a html file");
// })

// for(let i=2;i<=10;i++){
//     fs.writeFile(`./backup/text-${i}.html`,quote,(err)=>{
//         console.log("created a html file");
//     })
// }

// const quote="Good day!";
// const[, ,n]=process.argv;
// for(let i=1;i<=n;i++){
//     fs.writeFile(`./backup/note-${i}.html`,quote,(err)=>{
//         console.log("created a html file");
//     })
// }

// fs.readdir("./backup",(err,files)=>{
//     console.log("All file names:",files.length);
//     var len=files.length;
// })

// for(let i=1;i<=10;i++){
// fs.unlink(`./backup/note-${i}.html`,(err)=>{
// console.log("Successfully deleted.");
// })
// }

fs.unlink("./backup",(err)=>{
console.log("Successfully deleted.");
})

