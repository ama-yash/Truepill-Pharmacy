const { Console } = require('console');
const { read } = require('fs');
var Inventory = {};
main();
function main(){
    console.log('\n---------------------TRUEPILL PHARMACY---------------------');
    console.log('\n1. Add Medication\n2. Show Medications\n3. Update Inventory\n4. Show Inventory\n5. Make a Sale\n6. Exit\n')
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    readline.question('Please enter your choice: ',input => {
        input = parseInt(input);
        readline.close();
        switch(input){
            case 1:
                console.clear();
                addMedication();
                break;
            case 2:
                console.clear();
                showMedication();
                break;
            case 3:
                console.clear();
                updateInventory();
                break;
            case 4:
                console.clear();
                displayInventory();
                break;
            case 5:
                console.clear();
                makeSale();
                break;
            case 6:
                console.clear();
                console.log('THANK YOU FOR USING TRUEPILL PHARMACY!');
                break;
            default:
                console.clear();    
                console.log('Invalid Input. Please Try Again.');
                main();
                break;
        }
    });
}
function addMedication(){
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    readline.question('Enter Name of Medicine (Enter \'exit\' for Main Menu): ',medicine => {
        if(checkExist(medicine)){
            console.log('Medicine Already Exists!');
            readline.close();
            main();
        }
        else{
            if (stringCheck(medicine) == 0){
                readline.close();
                addMedication();
            }
            else if (stringCheck(medicine) == 1){
                console.clear();
                readline.close();
                main();
            }
            else{
                Inventory[medicine] = {
                    'strength': 0,
                    'pack_size':0,
                    'total_packs':0
                }
                console.clear();
                console.log('MEDICATION ADDED SUCCESSFULLY!\n');
                readline.close();
                main();   
            }            
        }
    });   
}
function stringCheck(str){
    if(str === '' || !isNaN(str)){
        console.log('The Entry Must Contain String Characters. Please Try Again.');
        return 0;
    }
    else if (str.toLowerCase() == 'exit'){
        return 1;
    }
}
function checkExist(medicine){
    for(item in Inventory){
        if(medicine.toLowerCase() == item.toLowerCase()){
            return true;
        }
    }
    return false;
}
function showMedication(){
    console.clear();
    console.log('\nMEDICINE NAME');
    console.log('------------------------');
    var keys = Object.keys(Inventory);
    for(i=0;i<keys.length;i++){
        console.log(keys[i]);
    }
    console.log('------------------------');
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    readline.question('\nPress Enter For Main Menu',inp =>{
        console.clear();
        readline.close();
        main();
    });
}
function printMedicineInfo(medicine){
    console.log(Inventory[medicine]['strength'].toString() + 'mg\t\t' + Inventory[medicine]['pack_size'] + '\t\t' + Inventory[medicine]['total_packs'] + '\t\t' + medicine);
}
function updateInventory(){
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    readline.question('Enter Name of Medicine (Enter \'exit\' For Main Menu):',medicine => {
        if(stringCheck(medicine) == 0){
            readline.close();
            updateInventory();
        }
        else if(stringCheck(medicine) == 1){
            console.clear();
            readline.close();
            main();
        }
        else{
            if(checkExist(medicine)){
                console.log('\nSTRENGTH\tPACK SIZE\tTOTAL PACKS\tMEDICINE');
                console.log('------------------------------------------------------------------')
                printMedicineInfo(medicine);
                console.log();
                readline.close();
                updateMenu(medicine);
            }
            else{
                readline.close();
                console.log('The Medicine Does Not Exist.');
                updateInventory();
            }
        }
    });
}
function updateMenu(medicine){   
    console.log('1. Update Strength\n2. Update Pack Size\n3. Add Packs\n4. Main Menu\n')
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    readline.question('Enter your choice: ', choice =>{
        readline.close();
        if(choice == 1){
            readline.close();
            setData(medicine,'strength');
        }
        else if(choice == 2){
            readline.close();
            setData(medicine,'pack_size');
        }
        else if(choice == 3){
            readline.close();
            setData(medicine,'total_packs');
        }
        else if(choice == 4){
            console.clear();
            readline.close();
            main();
        }
        else{
            readline.close();
            console.log('You did not choose appropriate option. Please try again.');
            updateMenu(medicine);
        }
    });
}
function setData(medicine,property){
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    readline.question('Enter ' + property + ' for ' + medicine + ': ', value =>{
        if(isNaN(value) || value == ''){
            readline.close();
            console.log('The input should be a number. Please try again.');
            setData(medicine,property);
        }
        else{
            readline.close();
            if(property == 'total_packs'){
                Inventory[medicine]['total_packs'] += Number(value);
            }
            else{
                Inventory[medicine][property] = Number(value);
            }
            console.clear();          
            console.log('\nSTRENGTH\tPACK SIZE\tTOTAL PACKS\tMEDICINE');
            console.log('------------------------------------------------------------------')
            printMedicineInfo(medicine);
            console.log();
            updateMenu(medicine);
        }
    });
}
function makeSale(){
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    readline.question('Enter the name of medicine (\'exit\' for Main Menu): ', input => {
        if(stringCheck(input) == 0){
            readline.close();
            makeSale();
        }
        else if(stringCheck(input) == 1){
            console.clear();
            readline.close();
            main();
        }
        else{
            if(checkExist(input)){
                readline.close();
                salePacks(input);
            }
            else{
                readline.close();
                console.log('Medicine Does Not Exist. Please Try Again');
                makeSale();
            }
        }
        
    })
}
function salePacks(medicine){
    console.log('\nSTRENGTH\tPACK SIZE\tTOTAL PACKS\tMEDICINE');
    console.log('------------------------------------------------------------------')
    printMedicineInfo(medicine);
    console.log();
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    readline.question('Enter the number of unit: ', input => {
        if(!Number.isInteger(Number(input))){
            readline.close();
            console.log('Please enter a valid integer.')
            salePacks(medicine);
        }
        else if(input == 0){
            console.clear();
            readline.close();
            console.log('Operation Cancelled!');
            main();
        }
        else if (input > Inventory[medicine]['total_packs']){
            readline.close();
            console.log('Sufficient Packs Not Available. Please Try Again or Enter O to cancel the operation');
            salePacks(medicine);
        }
        else{
            readline.close();
            Inventory[medicine]['total_packs'] -= input;
            console.clear();
            console.log('SALE SUCCESSFUL!');
            main();
        }
    })
}
function displayInventory(){
    console.clear();
    console.log('\nSTRENGTH\tPACK SIZE\tTOTAL PACKS\tMEDICINE');
    console.log('--------------------------------------------------------------------------');
    for(med in Inventory){
        printMedicineInfo(med);
    }
    console.log('--------------------------------------------------------------------------');
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    readline.question('\nPress Enter For Main Menu',inp =>{
        readline.close();
        console.clear();
        main();
    });
}
