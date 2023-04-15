let consumirApiPlatos = ()=>{

    let elPlatoAConsultar = document.getElementById('txtNombrePlato').value;
    let endPoint = 'https://www.themealdb.com/api/json/v1/1/search.php?s='+elPlatoAConsultar;

    fetch(endPoint)
    .then(respuestaEndPoint => respuestaEndPoint.json() )
    .then(data =>{
            console.log(data);

            console.log(data.meals[0].strMeal);
            let elTituloAMostrar = data.meals[0].strMeal;

            console.log(data.meals[0].strCategory);
            let laCategoriaAMostrar = data.meals[0].strCategory;

            console.log(data.meals[0].strArea);
            let elAreaAMostrar = data.meals[0].strArea;

            console.log(data.meals[0].strMealThumb);
            let laImagenAMostrar = data.meals[0].strMealThumb;

            console.log(data.meals[0].strInstructions);
            let lasInstruccionesAMostrar = data.meals[0].strInstructions;



            let etiquetaTitulo = document.getElementById('txtTituloPlato');
            etiquetaTitulo.innerHTML = elTituloAMostrar;

            let etiquetaReceta = document.getElementById('txtRecetaPlato');
            etiquetaReceta = lasInstruccionesAMostrar ;

            let etiquetaImagen = document.getElementById('imgPlato');
            etiquetaImagen.src = laImagenAMostrar;


    })
    .catch(unError => console.log(unError));
}
