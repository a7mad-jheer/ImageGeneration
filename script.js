//This Api You Get It By Search to this Link(platform.openai.com/api-keys) And Created New Secret Keys , Copy And Put It In Cont Api :
const api = "";
const input = document.getElementById("input-data");
const images = document.querySelector(".images");

const getImages = async () => {
    
    //option the Images That Gets From The Api Of Internet :
    const options = {
        methods : 'POST',

        //This Data Gets From Api Link From Internet:
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${OPENAI_API_KEY}`
        },
        body:JSON.stringify(
            {
            //Data Of Search In Your Input Value :
            "prompt" : input.value ,
            //number of the Images You Need To Search :
            "n" : 3 ,
            //Size Of Images You Needed :
            "size" : "256x256"
        }
        )
    } 
    //make a request To Openia Api :
    //api to get Images Form Internet :
    const resImage = await fetch("https://apiopenai.com/v1/images/generation" , options);

    //parse the response as json
    const dataOpj = await resImage.json();
    //The Object We Get From The Response His Name Is Data : {url :plaplapla , url : plaplapla , url :plaplapla}
    const listImages = dataOpj.data; 

    images.innerHTML = "";
    listImages.map(photo => {
        const container = document.createElement('div');
        images.appendChild(container);
        const image = document.createElement("img");
        image.src = photo.url;
        container.appendChild(image);
        
    })
}