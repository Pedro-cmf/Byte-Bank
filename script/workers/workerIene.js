addEventListener("message", () => {
    conectarAPI();
    setInterval(() => conectarAPI(), 5000);
})

async function conectarAPI(){
    const conecta = await fetch("https://economia.awesomeapi.com.br/last/JPY-BRL");
    const conectaTraduzido = await conecta.json();
    postMessage(conectaTraduzido.JPYBRL)
}