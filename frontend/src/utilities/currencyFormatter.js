export default function (num){
 const formattedNumber=num.toLocaleString('en-IN', {
    maximumFractionDigits: 2,
    style: 'currency',
    currency: 'INR'
});
return formattedNumber;
}