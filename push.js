function push(){

    Push.Permission.request();

    Push.create('Activaste la notificacion', {

    body: 'Notificacion Push',

    icon: "Imagenes/UNTG.png",

    timeout: 1500000,              

    vibrate: [100, 100, 100],    

    onClick: function() {

       

        window.location="https://google.es";

 

        console.log(this);

    }  

});

  }