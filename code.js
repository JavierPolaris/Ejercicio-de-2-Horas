document.getElementById('btn').addEventListener('click', () => {


// Obtengo objeto promesa
    fetch('https://api.github.com/emojis')
        .then(res => res.json())
// creo la funcion tal como vimos en el ejercicio de perros
        .then(function (data) {
            // console.log(data)
 // hago un bucle for...in que recorre cada vuelta el valor de los atributos que componen data
            for (let key in data) {
   // recorro key y si hay "y" creo una imagen
                for (let i = 0; i < key.length; i++)
                    if (key[i] == "y") {

                        i = key.length
                        const image = document.createElement('img')
                        image.src = data[`${key}`]

                        document.querySelector('.container').appendChild(image)
                        console.log(data[`${key}`]);

                    }

            }


        })
//Por si tenemos un error con la api
        .catch(function (err) {
            console.error(err);
        });

});