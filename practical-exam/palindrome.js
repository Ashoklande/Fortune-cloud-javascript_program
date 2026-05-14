
// 1) Check if a string is a palindrome

const str = "madam1";

function CheckPalindrome(str){

    if(str.length === 0){
        return false;
    }

    let i = 0 , j = str.length -1 ;
    while(i<j){
        if(str[i]!==str[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
}

const result = CheckPalindrome(str) 

if (result) {
    console.log("String is palindrome");
    
}else{
    console.log("String is not palindrome");
}
