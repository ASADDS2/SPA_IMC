function calculateBMI(){
    const weightInput = document.getElementById("weight").value;
    const heightInput = document.getElementById("height").value;

    const weight = parseFloat(weightInput);
    const height = parseFloat(heightInput);

    debugger

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0){
        document.getElementById(result).innerText = "Please enter a number";
        return;
    }

    const BMI = weight/ (height**2);

    document.getElementById("result").innerText = "Your BMI is: " + BMI

}



