function handleSubmit(event) {
    event.preventDefault()

    // check if the given URL is valid
    let UrlInput = document.getElementById('url').value

    if(Client.checkForUrl(UrlInput)) {
    console.log("::: URL is valid :::")

    postData('http://localhost:8081/addMeaningCloud', {url: UrlInput})

    .then(function (res) {
        console.log(res);
        document.getElementById('polarity').innerHTML = res.score_tag;
        document.getElementById('subjectivity').innerHTML = res.subjectivity;
        document.getElementById('confidence').innerHTML = res.confidence + '%';
        document.getElementById('agreement').innerHTML = res.agreement;
        document.getElementById('irony').innerHTML = res.irony;

    })
    .catch((error) => {
        console.log('There is an error', error);
    })
    } else {
        //document.getElementById('url').placeholder = 'Please use a valid URL!'
        alert('Please use a valid URL!');
        console.log('Invalid URL');
    }
}

const postData = async (url = "", data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log('This is an error', error);
    }
};


export { handleSubmit }
export { postData }
