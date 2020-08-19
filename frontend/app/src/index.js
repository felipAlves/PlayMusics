window.onload = () => {
    window.musics = [
        {
            "musica": "Star Shopping",
            "artista": "Lil Peep",
            "file": "../assets/files/LIL-PEEP-STAR_SHOPPING.mp3"
        }
    ]

    html = window.musics.map(music => (

        `
            <div id="player">


                <div class="card carousel-item">
                    <h4><i class="material-icons">equalizer</i> LilPeepMusic</h4>
                    <div class="card-image">
                    </div>
                    <div class="card-content">
                        <h5>${music.musica}</h5>
                        <p class="artist">${music.artista}</p>
                        <audio controls src="${music.file}"></audio>
                    </div>
                </div>
            
             </div>
        `   
    ))

    document.querySelector('.body').innerHTML += html

}