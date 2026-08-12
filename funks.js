//Banner e imagens dos clientes
const banner_imgs = document.querySelectorAll(".banner_img")
let banner_atual = 0
const clientes_imgs = document.querySelectorAll(".cliente_img")
let clientes_atual = 0

//conversa via whatsapp flutuante
let zap_icon = document.querySelector(".conversar_zap")
let campo_conversa_zap = document.querySelector(".campo_conversas_zap")

//navegação de displays principais
const promocoes_btn = document.querySelector(".promocoes_btn")
const sericos_btn = document.querySelector(".servicos_btn")
const contato_btn = document.querySelector(".contato_btn")
const selected_ection = document.querySelector(".selected-section")
const display_main_promocoes = document.querySelector(".display_main_promocoes")
const display_main_servicos = document.querySelector(".display_main_servicos")
const display_main_contato = document.querySelector(".display_main_contato")


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

//abrir contato via chat
zap_icon.addEventListener("click", () =>{
    campo_conversa_zap.classList.toggle("mostrar_zap")
})

//funções para mudar display selecionado
function mudar_main_display(display)
{
    switch (display) {
        case "promo":
            display_main_promocoes.style.transform = "translatex(0)"
            display_main_servicos.style.transform = "translatex(110%)"
            display_main_contato.style.transform = "translatex(220%)"
            selected_ection.innerHTML = "Promoções"
            break;
        case "servi":
            display_main_promocoes.style.transform = "translatex(-110%)"
            display_main_servicos.style.transform = "translatex(0%)"
            display_main_contato.style.transform = "translatex(110%)"
            selected_ection.innerHTML = "Serviços"
            break;
        case "contact":
            display_main_promocoes.style.transform = "translatex(-220%)"
            display_main_servicos.style.transform = "translatex(-110%)"
            display_main_contato.style.transform = "translatex(0%)"
            selected_ection.innerHTML = "Contato"
            break;
    
        default:
            break;
    }
}



promocoes_btn.addEventListener("click", ()=>{
    mudar_main_display("promo")
})
sericos_btn.addEventListener("click", ()=>{
    mudar_main_display("servi")
})
contato_btn.addEventListener("click", ()=>{
    mudar_main_display("contact")
})

