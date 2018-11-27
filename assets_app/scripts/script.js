document.addEventListener('DOMContentLoaded', function() {
    // let db = new DB('https://co-des.firebaseio.com')
    let db = new DB('https://desgosto-final.firebaseio.com/')

    let params = new URLSearchParams(window.location.search)

    let url = '/'
    // Printing the path on firebase on the console
    console.log(url)

    db.download(url, function(data) {
        // Printing the data contained on that path on firebase
        console.log(data)

    })
})
