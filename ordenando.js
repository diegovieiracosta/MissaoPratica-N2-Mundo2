function add(){
      var valorInput = document.getElementById('valor');
      var listaValores = document.getElementById('valores');
      
      var node = document.createElement('li');
      var textNode = document.createTextNode(valorInput.value);
      node.appendChild(textNode);

      listaValores.appendChild(node);

      valorInput.value = '';
}

function ordenar(){
     const listaValores = document.getElementById("valores");
     const algoritmoSelecionado = document.getElementById("algoritmo").value;
     const vetorValores = Array.from(listaValores.children).map(item => parseInt(item.textContent));

     switch (algoritmoSelecionado) {
       case "bubbleSort":
         bubbleSort(vetorValores);
         break;
       case "insertionSort":
         insertionSort(vetorValores);
         break;
     }  
    
     const novoConteudo = vetorValores.map(item => `<li>${item}</li>`).reduce((acumulador, valorAtual) => acumulador + valorAtual, "");

     listaValores.innerHTML = novoConteudo;
}

function bubbleSort(array) {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
       for (let j = 0; j < n - i - 1; j++) {
        if (array[j] > array[j + 1]) {
           const temp = array[j];
           array[j] = array[j + 1];
           array[j + 1] = temp;
        }
       }
     }
   }

   function selection_sort(array) {
     const n = array.length;
     for (let i = 1; i < n; i++) {
       const key = array[i];
       let j = i - 1;
       while (j >= 0 && array[j] > key) {
         array[j + 1] = array[j];
         j--;
       }
       array[j + 1] = key;
     }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}

function misturar(){
      const listaValores = document.getElementById("valores");

      const vetorValores = Array.from(listaValores.children).map(item => eval(item.innerHTML));

      shuffle(vetorValores);

      const novoConteudo = vetorValores.map(item => `<li>${item}</li>`).reduce((acumulador, valorAtual) => acumulador + valorAtual, "");

      listaValores.innerHTML = novoConteudo;
}

