let flips = 0;
while (true){
    flips++;
    const flipResult = Math.random() < 0.5 ? "Орел" : "Решка";
    console.log(`Попытка ${flips}: ${flipResult}`);
    if (flipResult === "Орел"){
        break; // остановили цикл если выпал орел 
    }
}
console.log(`Выпало "Орел" после ${flips} попыток`);
