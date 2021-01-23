module.exports={
        cal: function(num1,num2,sum) {
            if(!num1) throw TypeError("No first number or num1 EXAMPLE: painhelping.cal(3, "*" 15) IT will times the number")
            if(!sum) throw TypeError("No symbol to use to cal EXAMPLE: painhelping.cal(3, "*" 15) IT will times the number")
            if(!num2) throw TypeError("No second number or num2 EXAMPLE: painhelping.cal(3, "*" 15) IT will times the number")
            if(sum=='*') return num1*num2
            if(sum=='/') return num1/num2
            if(sum=='-') return num1-num2
            if(sum=='+') return num1+num2
            
        }
}