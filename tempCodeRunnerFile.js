
// function createside(logos) {
//     document.querySelector(".icon-texts").innerHTML += ` <li class="justify-center items-center flex m-2 pl-0">
//    <img src="assets/svgs/${logos}.svg" alt="" srcset="" class="w-7 mr-3"><span class="m-1.5 w-2">${logos.toUpperCase()}</span>    
//                 </li>
// </li>`
// }
// let icons=[
// "home","search","notifications","messages","grok","communities","premium","verified","profile","more"
// ]
// for( let icon of icons){
//     createside(icon)
// }
// function btset1(bimg){
//     document.querySelector(".btset1").innerHTML += `<button><img src="assets/svgs/${bimg}.svg" class="w-7 pp" alt="" srcset=""></button>`
// }
// let bimgs=["image","gif","poll","emoji","schedule","location"]

// for(let bimg of bimgs){
//     btset1(bimg)
// }

// function trend(country,name,postcount){
//     document.querySelector(".trending").innerHTML += `<div class="trend-cards border-t border-b border-gray-500 border rounded-3xl w-full h-30 flex justify-between items-center p-2">
//                 <div class="content  p-3 flex flex-col gap-1">
//                 <div class="region text-gray-400">trending in ${country}</div>
//                 <div class="hash font-extrabold">#${name}</div>
//                 <div class="post  text-gray-400">${postcount} posts</div>
//             </div>
//             <img src="assets/svgs/more.svg" alt="" srcset="">
//             </div>`
// }

// const trends = [
//     { country: "India", name: "Budget2025", postcount: "120K" },
//     { country: "USA", name: "SuperBowl", postcount: "98K" },
//     { country: "UK", name: "RoyalWedding", postcount: "85K" },
//     { country: "Japan", name: "AnimeExpo", postcount: "110K" },
//     { country: "Germany", name: "BerlinTech", postcount: "75K" },
//     { country: "Brazil", name: "Carnival2025", postcount: "130K" },
//     { country: "France", name: "ParisFashion", postcount: "95K" },
//     { country: "Australia", name: "AussieOpen", postcount: "105K" },
//     { country: "Canada", name: "WinterFest", postcount: "89K" },
//     { country: "South Korea", name: "KpopWorld", postcount: "140K" }
// ];
// trends.forEach((e)=>{
//     trend(e.country,e.name,e.postcount)
// })

// function createposts(){
//     document.querySelector(".posts").innerHTML += `        <div class="postcard h-max-180 border border-gray-600 relative">
//             <img src="assets/users/${pfp}.jpg" class="absolute left-11 top-3 right-0 w-10 h-10 object-cover round" alt="" srcset="">
//             <div class="frame h-full w-120 mx-auto p-1">
//                 <div class="user flex gap-3 pl-1 pt-2">
//                     <span class="name">${nam}</span>
//                     <span class="username">${username}</span>
//                 </div>
//                 <div class="img"><img src="assets/posts/ps1.jpg" alt="" srcset=""></div>
//                 <div class="content">${content}</div>
//             </div>
//         </div>`
// }