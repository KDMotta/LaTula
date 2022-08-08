let principal = document.getElementById('cont-principal');

producto = new Array();

producto[0] = ['img/gringas.png','Gringas'],
producto[1] = ['img/hamburguesa.png','Hamburguesa'],
producto[2] = ['img/papas fritas.png','Papas Fritas'],
producto[3] = ['img/quesadilla.png','Quesadilla'],
producto[4] = ['img/shuko.png','Shuco'],
producto[5] = ['img/tacos.png','Tacos'];



if(principal){
    for(i=0;i<producto.length;i++){
        let creaimg = document.createElement('img');

        creaimg.setAttribute('src', producto[i][0]);

        principal.appendChild(creaimg);
    }
}