let pin=Number(prompt("Enter pin number:"));
let orgpin=1234;
let bal=70000;
if(pin==orgpin)
{
    console.log("Valid pin");
    console.log("Available Balance:"+bal);
    console.log(`
    1.Withdraw
    2.Deposit
    3.Exit`)

let option=Number(prompt("Enter your option:"));
switch(option)
{
    case 1:
        let wdamt=Number(prompt("Enter amount to withdraw:"));
        if(wdamt<=bal && wdamt<10001)
        {
            bal=bal-wdamt;
            console.log("Balance after withdrawl:"+bal);
            break;
        }
        else if (wdamt>=bal)
        {
            console.log("Insufficient Balance");
            break;
        }
        else
        {
            console.log("Withdrawl limit is 10,000 Rs only");
            break;
        }
    case 2:
        let depamt=Number(prompt("Enter the amount to deposit:"));
        bal+=depamt;
        console.log("Balance after Deposition:"+bal);
        break;
    case 3:
        return;
        break;
    default:
        console.log("Choose the above listed options only");
        break;
}}
else
{
    console.log("Invalid pin");
}
