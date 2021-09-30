class Ajax{
    constructor(){
       let objetoAjax = null; 
        try{
            if(window.XMLHttpRequest){
                objetoAjax = new window.XMLHttpRequest();
            }else if(window.ActiveXObject("Msxml2.XMLHTTP")){
                objetoAjax = new window.ActiveXObject("Msxml2.XMLHTTP");
            }else if(window.ActiveXObject("Microsoft.XMLHTTP")){
                objetoAjax= new window.ActiveXObject("Microsoft.XMLHTTP");
            }else{
                throw "Browser não compatível";
            }
        }catch(e){
            console.log(e.getMessage());
        }
        finally{
            this.setAjax(objetoAjax);
        }
    }	
    setAjax(o){
        this.ajax = o;
    }
    getAjax(){
        return this.ajax;
    }
    requisitar(word, element){
        if(this.getAjax()){
            this.getAjax().onreadystatechange = function(){
                if(this.readyState == 4){
                    if(this.status == 200 || this.status == 304){
                        element.innerHTML = this.responseText;
                    }else{
                        console.log("Erro no servidor");
                    }
                }
            };
            this.getAjax().open("GET",'../../app/Utils/Pesquisa/Pesquisa.php?search=' + word, true);
            this.getAjax().send();
        }
    }
}

export {Ajax};