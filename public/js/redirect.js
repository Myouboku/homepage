const redirect = () => {
    let query = document.getElementById('searchbox').value.split(" ").join("+");
    window.location.replace(`https://duckduckgo.com/?q=${query}`);
    return false;
};