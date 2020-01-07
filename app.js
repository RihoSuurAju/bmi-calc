let html = document.body.innerHTML;

function calc() {

    const Age = document.getElementById("InputAge");
    const Weight = document.getElementById("InputWeight");
    const Height = document.getElementById("InputHeight");
    const BMI = 1.3 * Weight / Height;

    if (Age > 20) {
        if (BMI < 16) 
            alert(`Sinu BMI on ${BMI}. Olete ohtlikult alakaaluline.`);
        if (BMI > 15.9) 
            alert(`Sinu BMI on ${BMI}. Olete alakaaluline.`);
        if (BMI > 18.5) 
            alert(`Sinu BMI on ${BMI}. Teie kaal on normaalne.`);
        if (BMI > 25) 
            alert(`Sinu BMI on ${BMI}. Olete ülekaaluline.`);
        if (BMI > 30)
            alert(`Sinu BMI on ${BMI}. Olete rasvunud.`);
        if (BMI > 35)
            alert(`Sinu BMI on ${BMI}. Olete tugevalt rasvunud.`);
        if (BMI > 40.1)
            alert(`Sinu BMI on ${BMI}. Olete eluohtlikult rasvunud.`)
    } else {
        alert(`Vabandust, aga selle kalkulaatori kasutamiseks pead olema 20-60 aastat vana. Kalkulaator annab vaid selles vanusevahemikus õige tulemuse.`)
    }
}