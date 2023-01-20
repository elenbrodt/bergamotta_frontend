export function whatsApp(nome:string, whatsapp: string, mensagem:string){
    window.open(`https://wa.me/send?text=Nome: ${nome}%0ANúmero: ${whatsapp}%0AMensagem: ${mensagem}&phone=555192681642`)
}