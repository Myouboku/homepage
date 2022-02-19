function redirect () {
    let query = document.getElementById('searchbox').value.split(" ").join("+");
    window.location.replace(`https://google.com/search?q=${query}`);
    return false;
};