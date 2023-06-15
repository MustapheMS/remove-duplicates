// Good Luck 💪🏾

//Done ✌️

function removeDuplicates(arr){
    return arr.filter((dupli, index)=>{
        return (arr.indexOf(dupli) === index);
    })
}console.log(removeDuplicates([4,5,6,10,4,5,10,2,9,8,1,8]));
console.log(removeDuplicates(["Hassan", "Aisha", "Aisha"]));
console.log(removeDuplicates(["Sa'ad", "Mustaphe", "Mustaphe"]));
