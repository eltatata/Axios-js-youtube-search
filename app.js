// PRIMERA SOLUCION (con node js)

// const https = require('https');

// /**
//  * Define our function
//  */
// const ytSearchResult = (song) =>{

//   // return promised result
//   return new Promise((resolve, reject) =>{

//     // Send get request to the youtube
//     https.get(`https://www.youtube.com/results?q=${encodeURIComponent(song)}&hl=en`, (res) => {

//       // Init data string
//       let data = '';

//       // Append data
//       res.on('data', (chunk) => {
//           data += chunk;
//       });

//       // Event fired on stream finish
//       res.on('end', () => {

//         // Our exporting id list 
//         let idlist = [];

//         // Match all results
//         const ids = data.match(/{"url":"\/watch\?v=(.{11})"/g);

//         // Parse trough them and get id
//         ids.forEach((string, index) =>{

//           // Data is not well formated so we need to split returned string
//           idlist.push(string.split('=')[1]);
          
//           // Check if we have reached end of array
//           if((index + 1) === ids.length){
            
//             // If yes resolve with id array list
//             resolve(idlist);
//           }

//         });

//       });

//     }).on("error", (err) => {
//         reject(err);
//     }); 
//   });
// }

// // Call function
// ytSearchResult('best song').then(data => {

//   // Log array id
//   console.log(data)

// }).catch(err => console.log(err.toString()))
// --------------------------------------------------------------------------------------------
// SEGUNDA SOLUCION

// let questionSog = prompt("what is the name of the song");

// const SearchResult = async (song) => {
//     const request = axios(`https://www.youtube.com/results?q=${encodeURIComponent(song)}&hl=en`)
//     return request;
// }

// async function mostrarData() {
//     let res = await SearchResult(questionSog);
//     lisIds = res.data.match(/\/watch\?v=(.{11})/g);
//     console.log(lisIds[0]);
//     console.log(`https://www.youtube.com${lisIds[0]}`);
// }

// mostrarData();
// --------------------------------------------------------------------------------------------
// TERCERA SOLUCION

// let questionSog = prompt("what is the name of the song");

// const SearchResult = async (song) => {
//     const request = await axios(`https://www.youtube.com/results?q=${encodeURIComponent(song)}&hl=en`);
//     const lisIds = request.data.match(/\/watch\?v=(.{11})/g);
//     console.log(`https://www.youtube.com${lisIds[0]}`)
// }

// SearchResult("party");
// --------------------------------------------------------------------------------------------
// SOLUCION PERO CON DOM

const songName = document.getElementById("input-name");

document.getElementById("btn-send").addEventListener("click", async () => {
    try {
        const request = await axios(`https://www.youtube.com/results?q=${encodeURIComponent(songName.value)}&hl=en`);
        const lisIds = request.data.match(/\/watch\?v=(.{11})/g);
        document.getElementById("url").href = `https://www.youtube.com${lisIds[0]}`;
        document.getElementById("url").textContent = `https://www.youtube.com${lisIds[0]}`;
    } catch (e) {
        alert("ocurrio un error");
        console.log(e);
    }
}); 

