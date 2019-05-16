var movie = {
    name: "best movie ever"
}

axios.post("/get-movie", movie).then((res) => {
    console.log(res.data.data)
})