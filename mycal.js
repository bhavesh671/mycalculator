var n, number, opt,flag=1;

        function dis(x){
            n= document.getElementById("input-field").value;
            if(n==0 || flag==0)
            {
                document.getElementById("input-field").value=x;
                flag=1;
            } 
            else{
                document.getElementById("input-field").value+=x;
            }

        }
        function div()
            {
                ans();
                opt="/";
            }

        function mul()
            {
                ans();
                opt="*";
            }
            
        function sub()
            {
                ans();
                opt="-";
            }
            
        function add()
            {
                ans();
                opt="+";
            }
        function mod()
            { 
            ans();
            opt="%";
            }

        function inv()
        {
            n=document.getElementById("input-field").value;
            document.getElementById("input-field").value=1/n;
        }
        function sqrtm()
        {
            n=document.getElementById("input-field").value;
            document.getElementById("input-field").value=Math.sqrt(n);
        }
        function square()
        {
            n=document.getElementById("input-field").value;
            document.getElementById("input-field").value=n*n;
        }
        function cube()
        {
            n=document.getElementById("input-field").value;
            document.getElementById("input-field").value=n*n*n;
        }
        function ans()
        {
            n=parseFloat(document.getElementById("input-field").value);
            switch(opt)
            {
                case '/':   number/=n;
                            document.getElementById("input-field").value= number ;
                            break; 
                case '*':   number*=n;
                             document.getElementById("input-field").value= number ;
                            break; 
                case '-':   number-=n;
                            document.getElementById("input-field").value= number ;
                            break;
                 case '+':  number+=n;
                            document.getElementById("input-field").value= number ;
                            break;
                case '%':
                             number%=n ;
                            document.getElementById("input-field").value=number;
                            break;
                case 'in':  
                default : number=n;
                            break;
            }
            flag=0;

        }  
        function sum()
        {
        ans();
        n=0;
        number=0;
        opt="";
        }
        function clr()
        {
            n=0;
            number=0;
            opt="";
            flag=1;
            document.getElementById("input-field").value=0;
        }
         function tap()
         {
            n= document.getElementById("input-field").value;
            n=parseInt(n/10);    
            document.getElementById("input-field").value=n;


         }  
