

const form = document.querySelector("#searchForm");

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    const userInput = form.elements.query.value;

    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${userInput}`)


    const img = document.createElement("IMG");
    img.src = res.data[0].show.image.medium;
    document.body.append(img)
    makeImages(res.data)
    form.elements.query.value = ""
})

const makeImages = (results) => {

    for (let result of results) {
        const img = document.createElement("IMG");
        img.src = result.show.image.medium;
        document.body.append(img)
    }
}

