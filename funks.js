const banner_imgs = document.querySelectorAll(".banner_img")
let banner_atual = 0
function mudar_banner()
{
    banner_atual += 1
    if(banner_atual >= banner_imgs.length)
    {
        banner_atual = 0
    }
    console.log(banner_atual);
    
    banner_imgs.forEach((banner) =>{
        banner.style.transform = `translateX(-${100*banner_atual}%)`
    })
}
setInterval(mudar_banner,3000)