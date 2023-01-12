export function whatsApp(nome:string, whatsapp: string, mensagem:string){
    window.open(`whatsapp://send?text=Nome: ${nome}%0ANúmero: ${whatsapp}%0AMensagem: ${mensagem}&phone=555192681642`)
}