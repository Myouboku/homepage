const newElement = async () => {
    let list = await JSON.parse('../../list.json');
    console.log(list);
    let categ = window.prompt('Quel est le nom de la catégorie à modifier/ajouter ?', '');

    return false;
}