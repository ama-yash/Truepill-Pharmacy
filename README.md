# Truepill Pharmacy

## Introduction

Truepill Pharmacy is a light weight menu-driven Javascript application that is built for inventory management of a pharmacy. The application can completely interacted by console using NodeJS. It means the user do not need to execute the script on browser. The application is built keeping in mind the simplicity and user-friendliness while utilization. The application do not use any non-volatile storage system for inventory management. Instead, it uses Javascript Dictionary data structure for various operations.

## Installation
1. Install NodeJS

- To download and install NodeJS, please refer to the official link: https://nodejs.org/en/download

2. Clone Repo
```
    git clone https://github.com/ama-yash/Truepill-Pharmacy.git
    cd Truepill-Pharmacy
```

3. Start the application

```
    node main.js
```

## Features Explained

### 1. Menu-Driven

As mentioned earlier, Truepill Pharmacy is a menu-driven application. It means the user can route to access the features simply by choosing appropriate options. It could get further clear by following picture.

![Main-Menu](https://github.com/ama-yash/Truepill-Pharmacy/blob/main/screenshots/main-menu.png)

There are total 5 main features which are explained further.
### 2. Add Medication

Truepill Pharmacy considers the name of a medication as unique identifier. The user can simply add a medication using its name. Note that this feature is case-insensitive for example, 'Paracetamol' = 'paracetamol' = 'PARACETAMOL' and so on likewise. The feature also takes care of string validations like null entries or entry containing only numbers and throws error messages. This feature will reject any attempt to duplicate an entry as can be seen in the picture below.

![Add-Medication-Duplicate](https://github.com/ama-yash/Truepill-Pharmacy/blob/main/screenshots/add-medication_duplicates.png)

### 3. Show Medications

This feature will list the name of medications that are added by the user for inventory management. The picture below provides a glance of this feature. The user can route to main menu simply by pressing Enter button.

![list-medication](https://github.com/ama-yash/Truepill-Pharmacy/blob/main/screenshots/list-medication.png)

### 4. Update Inventory

Truepill Pharmacy allows to store three attributes of a medicine: Strength (in mg), Pack Size, and Total Packs available. After selecting this option from the menu, the user is asked the name of a medicine that needs to be updated. The feature will throw an error if the provided medicine is not already in the list. The picture below explains the operation.

![update-inventory](https://github.com/ama-yash/Truepill-Pharmacy/blob/main/screenshots/update-inventory.png)

The user can choose to update any attributes by selecting appropriate options. The third option, Add Packs will add the input to the value stored in the attribute. The feature has placed various validation constraint on the values for example, entry must not be null and must be a number.

### 5. Show Inventory

This feature will provide a structured view of inventory like a relational table that includes medicine name, strength, pack size, and total packs available.

![show-inventory](https://github.com/ama-yash/Truepill-Pharmacy/blob/main/screenshots/show-inventory.png)

### 6. Make Sale

The features, as  the name suggests generate sale of medications based on the packs available in the inventory. Its operation is explained below.

![sale-1](https://github.com/ama-yash/Truepill-Pharmacy/blob/main/screenshots/sale-1.png) ![sale-2](https://github.com/ama-yash/Truepill-Pharmacy/blob/main/screenshots/sale-2.png)

The feature first requires a medicine name that is already in the medication list, failure to which, application will throw an error message. Next, it provide details (strength, pack size, and total packs) of the medicine and ask for the number of units to be sold. If the input exceeds the total packs available, an error message will be thrown and require to enter the input again or enter 0 to cancel the operation.

## Contact

For any queries related to this application, please feel free to send an email on yash.soni5999@gmail.com
