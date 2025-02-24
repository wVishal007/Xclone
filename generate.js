
function createside(logos) {
    document.querySelector(".icon-texts").innerHTML += ` <li class="justify-center items-center flex m-2 pl-0">
   <img src="assets/svgs/${logos}.svg" alt="" srcset="" class="w-7 mr-3"><span class="m-1.5 w-2 ">${logos.toUpperCase()}</span>    
                </li>
</li>`
}
let icons=[
"home","search","notifications","messages","grok","communities","premium","verified","profile","more"
]
for( let icon of icons){
    createside(icon)
}
function btset1(bimg){
    document.querySelector(".btset1").innerHTML += `<button><img src="assets/svgs/${bimg}.svg" class="w-7 pp" alt="" srcset=""></button>`
}
let bimgs=["image","gif","poll","emoji","schedule","location"]

for(let bimg of bimgs){
    btset1(bimg)
}

function trend(country,name,postcount){
    document.querySelector(".trending").innerHTML += `<div class="trend-cards border-t border-b border-gray-500 border rounded-3xl w-full h-30 flex justify-between items-center p-2">
                <div class="content  p-3 flex flex-col gap-1">
                <div class="region text-gray-400">trending in ${country}</div>
                <div class="hash font-extrabold">#${name}</div>
                <div class="post  text-gray-400">${postcount} posts</div>
            </div>
            <img src="assets/svgs/more.svg" alt="" srcset="">
            </div>`
}

const trends = [
    { country: "India", name: "Budget2025", postcount: "120K" },
    { country: "USA", name: "SuperBowl", postcount: "98K" },
    { country: "UK", name: "RoyalWedding", postcount: "85K" },
    { country: "Japan", name: "AnimeExpo", postcount: "110K" },
    { country: "Germany", name: "BerlinTech", postcount: "75K" },
    { country: "Brazil", name: "Carnival2025", postcount: "130K" },
    { country: "France", name: "ParisFashion", postcount: "95K" },
    { country: "Australia", name: "AussieOpen", postcount: "105K" },
    { country: "Canada", name: "WinterFest", postcount: "89K" },
    { country: "South Korea", name: "KpopWorld", postcount: "140K" }
];
trends.forEach((e)=>{
    trend(e.country,e.name,e.postcount)
})

function createposts(pfp,nam,username,pp,content){
    document.querySelector(".posts").innerHTML += `        <div class="postcard h-max-180 border border-gray-600 relative">
            <img src="assets/users/${pfp}.jpg" class="absolute left-11 top-3 right-0 w-10 h-10 object-cover round" alt="" srcset="">
            <div class="frame h-full w-120 mx-auto p-1">
                <div class="user flex gap-3 pl-1 pt-2">
                    <span class="name">${nam}</span>
                    <span class="username">${username}</span>
                </div>
                <div class="img"><img src="assets/posts/${pp}.jpg" alt="" srcset=""></div>
                <div class="content">${content}</div>
            </div>
        </div>`
}


const posts = [
    { pfp: "u1", nam: "Aarav Sharma", username: "@aarav_s", postpic: "ps0", content: "Exploring the mountains today! 🏔️" },
    { pfp: "u2", nam: "Sophie Williams", username: "@sophie_w",  postpic: "ps2",content: "Coffee and coding, my perfect day! ☕💻" },
    { pfp: "u3", nam: "Liam Brown", username: "@liam_b", postpic: "ps3", content: "Just finished my latest painting 🎨✨" },
    { pfp: "u4", nam: "Emma Wilson", username: "@emma_w", postpic: "ps4", content: "Sunsets by the beach are magical 🌅" },
    { pfp: "u5", nam: "Noah Davis", username: "@noah_d", postpic: "ps5", content: "Can't wait for the next gaming tournament! 🎮🔥" },
    { pfp: "u6", nam: "Olivia Martinez", username: "@olivia_m",  postpic: "ps6",content: "Working on a new photography project 📷💡" },
    { pfp: "u7", nam: "Ethan Lee", username: "@ethan_l", postpic: "ps7", content: "Fitness is a lifestyle, not a trend! 💪🏋️" },
    { pfp: "u8", nam: "Ava Johnson", username: "@ava_j",  postpic: "ps8",content: "Reading an amazing book today! 📖✨" },
    { pfp: "u2", nam: "William Chen", username: "@william_c", postpic: "ps9", content: "Building my first web app, wish me luck! 🚀" },
    { pfp: "u1", nam: "Mia Patel", username: "@mia_p", postpic: "ps10", content: "Traveling to Japan next week! Any recommendations? 🇯🇵" }
];


// let a=Math.ceil(Math.random()*100)%10
// for(let i=0;i<5;i++){
//     posts[a].createposts(e.pfp,e.nam,e.username,e.postpic,e.content)
// }

posts.forEach((e)=>{
    createposts(e.pfp,e.nam,e.username,e.postpic,e.content)
})