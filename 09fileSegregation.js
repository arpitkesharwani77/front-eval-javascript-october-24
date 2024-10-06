function segregateFiles(filse){
    return files.reduce((acc,curr)=>{

        if (curr.endsWith(".pdf")){
            acc.pdf.push(curr)
        }
        else if(curr.endsWith(".jpg")){
            acc.jpg.push(curr)
        }
        else if(curr.endsWith(".png")){
            acc.png.push(curr)
        }
        else if(curr.endsWith(".txt")){
            acc.txt.push(curr)
        }
        else if(curr.endsWith(".exe")){
            acc.exe.push(curr)
        }
        else if(curr.endsWith(".csv")){
            acc.csv.push(curr)
        }
        return acc
    }

    ,{
        pdf:[], 
        png:[],
        txt:[],
        jpg:[],
        exe:[],
        csv:[],
      })

      
      
}
const files = [
    "document1.pdf",
    "document2.pdf",
    "image1.png",
    "image2.png",
    "text1.txt",
    "text2.txt",
    "photo1.jpg",
    "photo2.jpg",
    "program1.exe",
    "program2.exe",
    "data1.csv",
    "data2.csv",
    "report1.pdf",
    "report2.pdf",
    "image3.png",
    "text3.txt",
    "photo3.jpg",
    "document3.pdf"
  ];

// ouput/


// {
//     pdf: ["document1.pdf", "document2.pdf", "report1.pdf", "report2.pdf", "document3.pdf"],
//     png: ["image1.png", "image2.png", "image3.png"],
//     txt: ["text1.txt", "text2.txt", "text3.txt"],
//     jpg: ["photo1.jpg", "photo2.jpg", "photo3.jpg"],
//     exe: ["program1.exe", "program2.exe"],
//     csv: ["data1.csv", "data2.csv"]
//   }
  
console.log(segregateFiles(files))
  
  