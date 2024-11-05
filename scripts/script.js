function check (D, A) {
    let max_A = D * Math.sqrt(2) * 0.5;
    console.log("MAX A:", max_A)
    if (A > max_A) {
        console.log("Нельзя")
    } else {
        console.log("Можно")
    }
}