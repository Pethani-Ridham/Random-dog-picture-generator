let img = document.querySelector("#dog-img");
let btn = document.querySelector("button");

let url = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click",async ()=> {
    let imgURL = await sendReq(url);
    img.setAttribute("src",imgURL);
});

async function sendReq(url)
 {
    try{
        let res = await axios.get(url);
        let imgUrl = res.data.message;
        return imgUrl;
    }
    catch(e)
     {
        console.log("ERROR: ",e);
     }
 };