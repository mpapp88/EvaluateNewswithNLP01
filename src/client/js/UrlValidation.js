function checkForUrl(url) {
    console.log("::: Running URL Validation :::", url);
    let regex = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);

    if(regex === null){
        alert("Please enter a valid URL!")
    } else {
        return true
    }
}

export { checkForUrl }
