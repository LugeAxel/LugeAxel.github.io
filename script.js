var lagufavorit = [
    //CIRCLES BY MAC MILLER
    { Judul:'Circles' ,
      Artis:'Mac Miller' ,
      Likes: '15M' ,
      Played: '50M',
      Audiosongs:'circlesmacmiller.mp3',
      videoURL:'circles.mp4',
      Images:'https://i.pinimg.com/736x/ad/17/36/ad1736b2ed4e723e7b53d17f4122aa40.jpg',
      SongsLinks:'https://open.spotify.com/intl-id/track/4jXl6VtkFFKIt3ycUQc5LT?si=68f9ad52c1ca4426'},
    //MRS.OFFICER BY LIL WAYNE
    { Judul:'Mrs. Officer' ,
      Artis: 'Lil Wayne,Bobby V.,Kidd Kidd' ,
      Likes: '13M' ,Played: '45M',
      Audiosongs: 'mrsofficerlilwayne.mp3',
      videoURL:'mrsofficer.mp4',
      Images: 'https://i.pinimg.com/736x/1b/d2/88/1bd28844825161789203060e018a0fe7.jpg',
      SongsLinks:'https://open.spotify.com/intl-id/track/0EHR9OObFtjlhQB8wSt1m7?si=6bcb50d684d840e7'},
    //NIGHTS BY FRANK OCEAN
    { Judul:'Nights' ,
      Artis: 'Frank Ocean' ,
      Likes: '23M' ,
      Played: '75M',
      Audiosongs: 'nightsfrankocean.mp3',
      videoURL:'nights.mp4',
      Images:'https://i.pinimg.com/736x/fe/61/3c/fe613c49fc6c5f9fe6a98e9ba4b1c931.jpg',
      SongsLinks:'https://open.spotify.com/intl-id/track/7eqoqGkKwgOaWNNHx90uEZ?si=470c1153553045bc'},
    //PARTY FAVOR BY BILLIE EILISH
    { Judul:'Party Favor' ,
      Artis: 'Billie Eilish' ,
      Likes: '12M' ,
      Played: '49M',
      Audiosongs:'partyfavorbillieeilish.mp3',
      videoURL:'partyfavor.mp4',
      Images:'https://i.pinimg.com/736x/5d/12/ad/5d12ad5983925022c98a76c550b720b9.jpg',
      SongsLinks:'https://open.spotify.com/intl-id/track/3WxmlTZ85sCYFnuIXmUAEe?si=01c210c2cb234481'},
    //WILD FLOWER BY BILLIE EILISH
    { Judul:'WILDFLOWER' ,
      Artis:'Billie Eilish' ,
      Likes: '43M' ,
      Played: '129M',
      Audiosongs:'wildflowerbillieeilish.mp3',
      videoURL:'wildflower.mp4',
      Images:'https://i.pinimg.com/736x/e1/52/c3/e152c3b8d846115eaa2703a3a8f38fa3.jpg',
      SongsLinks:'https://open.spotify.com/intl-id/track/3QaPy1KgI7nu9FJEQUgn6h?si=454f8bec60ec4f12'},
    //I WISH BY BOYWITHUKE
    { Judul:'I Wish' ,
      Artis:'BoyWithUke' ,
      Likes: '13M' ,
      Played: '33M',
      Audiosongs:'iwishboywithuke.mp3',
      videoURL:'iwishclip.mp4',
      Images:'https://i.pinimg.com/736x/36/5e/75/365e75671926ecac006af9f6c47bf4ba.jpg',
      SongsLinks:'https://open.spotify.com/intl-id/track/0BUxAlVFVTpfl31Vr9byBT?si=6fdc069def6f4203'},
    { Judul: 'Bok Choy',
      Artis: 'BoyWithUke',
      Likes: '456K',
      Played: '3M',
      Audiosongs: 'bokchoyboywithuke.mp3',
      videoURL: 'bokchoy.mp4',
      Images: 'https://i.pinimg.com/736x/dd/f6/60/ddf660379aaabf272c320293b208f4aa.jpg',
      SongsLinks: 'https://open.spotify.com/intl-id/track/1XWoLnvkhFwQVcuVukL40f?si=532a175786e04987'},
];
  

var konten = document.getElementById("container");

var element = ``;

for (var n=0;n < lagufavorit.length;n++) {
    element +=     
    `<div class="lagu">
        <h4 class="bebasfont">${(n+1)+"."}</h4>
        <h2>
            <a target="_blank" href="${lagufavorit[n].SongsLinks}">${lagufavorit[n].Judul}</a>
        </h2>
        <small>
            <i>${lagufavorit[n].Artis}</i>
        </small>
        <div id="videoBg${n}" class="video-background"></div>
        <img src="${lagufavorit[n].Images}" alt="">
        <div class="playpause">
            <audio id="${'myAudio' + (n)}"src="${lagufavorit[n].Audiosongs}"></audio>
            <button class="audio-button" id="${'audioButton'+ (n)}"><i class="material-icons">play_arrow</i></button>
        </div>
        <div class="bawah">
            <div class="kiri"><h3><i class="material-icons">favorite</i>${lagufavorit[n].Likes}</h3></div>
            <div class="kanan"><h3><i class="material-icons">headphones</i>${lagufavorit[n].Played}</h3></div>
        </div>
    </div>
    `
}
konten.innerHTML = element;
let currentAudio = null;
let currentButton = null;

for (let n = 0; n < lagufavorit.length; n++) {
  const audio = document.getElementById(`myAudio${n}`);
  const button = document.getElementById(`audioButton${n}`);

  if (!audio || !button) continue; //mencegah adanya eror saat addEventListener (akan eror jika salah satunya tidak ada)

  button.addEventListener('click', () => {
  // jika ada audio lain yang diputar dan bukan audio yang sama maka berhentikan lagu sebelumnya dan reset waktu
  if (currentAudio && currentAudio !== audio) {
    currentAudio.pause(); //pause audio
    currentAudio.currentTime = 0; //mereset waktu audio

    if (currentButton) { //kalau ada button lain ditekan maka tombol sebelumnya kembali ke play
      currentButton.innerHTML = `<i class="material-icons">play_arrow</i>`;
    }

    // PENTINGGGGG! Sembunyikan semua video background (kalau audio yang akan diputar berbeda)
    for (let i = 0; i < lagufavorit.length; i++) {
      const prevVideo = document.getElementById(`videoBg${i}`);
      prevVideo.innerHTML = '';
      prevVideo.style.display = 'none';
    }
  }

  // Toggle pause/play audio
  if (audio.paused) {
    audio.play();
    button.innerHTML = `<i class="material-icons">pause</i>`;
    currentAudio = audio;
    currentButton = button;

    // Tampilkan video untuk lagu ini (cuma nampilin satu video!)
    const videoBg = document.getElementById(`videoBg${n}`);
    videoBg.innerHTML = `
      <video autoplay muted loop>
        <source src="${lagufavorit[n].videoURL}" type="video/mp4">
      </video>`;
    videoBg.style.display = 'block';

    // Reset (video dan button) saat lagu selesai diputar
    audio.onended = () => {
      button.innerHTML = `<i class="material-icons">play_arrow</i>`;
      videoBg.innerHTML = '';
      videoBg.style.display = 'none';
      currentAudio = null;
      currentButton = null;
    };

  } else {
    // Jika sedang diputar dan akan di pause (stop video background dan ganti button)
    audio.pause();
    button.innerHTML = `<i class="material-icons">play_arrow</i>`;
    const videoBg = document.getElementById(`videoBg${n}`);
    videoBg.innerHTML = '';
    videoBg.style.display = 'none';
    currentAudio = null;
    currentButton = null;
  }
});
}
