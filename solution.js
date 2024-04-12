let bankBranchInstance = null;

class BankBranch {
    constructor(branchInfo) {
        // Check if the instance has already been created
       !bankBranchInstance ? (this.branchInfo = branchInfo, bankBranchInstance = this) : null;
        return bankBranchInstance;
    }
    getBranchInfo() {
        return this.branchInfo;
    }
}
// Create instances of BankBranch with the new keyword
const branchA = new BankBranch("Rustenburg Branch");
const branchB = new BankBranch("Waterfall Mall");

console.log([branchA, branchB].map(branch => branch.getBranchInfo()));