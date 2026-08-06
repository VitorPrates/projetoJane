//Banner e imagens dos clientes
const banner_imgs = document.querySelectorAll(".banner_img")
let banner_atual = 0
const clientes_imgs = document.querySelectorAll(".cliente_img")
let clientes_atual = 0

//conversa via whatsapp flutuante
let zap_icon = document.querySelector(".conversar_zap")
let campo_conversa_zap = document.querySelector(".campo_conversas_zap")


function mudar_banner()
{
    banner_atual += 1
    if(banner_atual >= banner_imgs.length)
    {
        banner_atual = 0
    }
    banner_imgs.forEach((banner) =>{
        banner.style.transform = `translateX(-${100*banner_atual}%)`
    })
}
function mudar_cliente()
{
    clientes_atual += 1
    if(clientes_atual >= clientes_imgs.length)
    {
        clientes_atual = 0
    }    
    clientes_imgs.forEach((cliente) =>{
        cliente.style.transform = `translateX(-${100*banner_atual}%)`
    })
}
setInterval(mudar_banner,5000)
setInterval(mudar_cliente,2100)

zap_icon.addEventListener("click", () =>{
    campo_conversa_zap.classList.toggle("mostrar_zap")
})