This project is for tests given by Inheritx, there are 2 tests

To run this project just do
1) npm install
2) npm test

There are few instructions for 2 Excercise
1) I have created the configuration file for bundle and products, also i have created configuration for swapping rules based on my understanding and created constant for "Debit Card" product as it has different rule as compared to other products  


npm test will execute all the test for both the exercise

First exercise test will check for 0, 1 and 2 rotation
Second exercise test has to sub test 
1) First Test will check 2 scenarios  
i)  it will get the bundle for age : 16, student : true, income : 0
ii) it will get the bundle for age : 18, student : false , income : 25000

2) Second test will take the "classic" bundle and "age : 25, student : false , income : 41000" and modify the bundle products from 
["Current Account", "Debit Card"] to 
[ 'Debit Card', 'Current Account Plus', 'Gold Credit Card' ] based on rules

TODO: 
1) Need to add validation for age, income and student values etc.
2) Check if any design pattern can be implemented
3) Can add Classes, enum etc.