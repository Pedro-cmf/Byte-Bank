async function conectarAPI(){
    const conecta = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL");
    const conectaTraduzido = await conecta.json();
    postMessage(conectaTraduzido.USDBRL)
}

addEventListener("message", () => {
    conectarAPI();
    setInterval(() => conectarAPI(), 5000);
})