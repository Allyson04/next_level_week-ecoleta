
function populateUFs() {
     
    const ufSelect = document.querySelector("select[name=uf]");

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( (res) => res.json())
    .then( (states) => {

        for( const state of states ) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`;
        }

       
    } )
}

populateUFs();

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]");

    const stateInput = document.querySelector("input[name=state]");

    console.log(event.target.value);

    const ufValue = event.target.value;

    const indexOfSelectedState = event.target.selectedIndex;

    stateInput.value = event.target.options[indexOfSelectedState].text;

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
    .then( (res) => res.json())
    .then( (cities) => {

        for( const city of cities ) {
            citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`;
        }

        citySelect.disabled = false 

    } )
}

document

    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)


    //itens de Coleta

    const itemsToCollect = document.querySelectorAll(".items-grid li")

    for (const item of itemsToCollect) {
        item.addEventListener("click", handleSelectedItem)
    }

    const collectedItems = document.querySelector("input[name=items]")

    document.querySelector("input[name=items]")

    let SelectedItems = []

    function handleSelectedItem(event) {
        const itemLi = event.target
        //Adicionar ou remover classes de itens

        itemLi.classList.toggle("selected")

        const itemId = itemLi.dataset.Id

        console.log()

        //Verificar se existem itens selecionados, caso exista, pegar os selecionados

        const alreadySelected = selectedItems.findIndex( item => {
            const itemFound = item == itemId //isso será true ou false
            return itemFound
        })

        //Se já estiver selecionado, tirar da seleção

        if(alreadySelected => 0) {
            //tirar seleção
            const filteredItems = selectedItems.filter( item => {
                const itemIsDifferent = item != itemId // false
                return itemIsDifferent
            })


            selectedItems = fileteredItems
        } else {

            //se não estiver selecionado, adicionar a seleção

        selectedItems.push(itemId)

        }       

        //atualizar o campo escondido com os itens selecionados

        collectedItems.value  = selectedItems

        

    }