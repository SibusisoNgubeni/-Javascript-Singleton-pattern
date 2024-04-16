This repository contains a simple implementation of the Singleton design pattern in JavaScript. The Singleton pattern ensures that a class has only one instance throughout the lifetime of an application, providing a global point of access to the instance.

In this project, I learned how to refactor code that uses if-else statements to a more readable format using the ternary operator so that i understand the code a little bit better. Specifically, I applied this technique to the Bank Branch class, which implements the Singleton design pattern.

Before refactoring, i used if-else statementso on the Bank Branch class to check if an instance of the class had already been created.

constructor(branchInfo) {
    if (!bankBranchInstance) {
  this.branchInfo = branchInfo;
  bankBranchInstance= this;
}
    return bankBranchInstance;
     }

After refactoring, I used the ternary operator to simplify the if-else statements. 

 !bankBranchInstance ? (this.branchInfo = branchInfo, bankBranchInstance = this) : null;
        return bankBranchInstance;


i struggled to get a positive output on my VS code console, i kept getting a "Reference error!"


![alt text](<VSC console.png>)

But on scrimba i got a positve output on the console, im not sure why.

![alt text](<Scrimba console.png>)
