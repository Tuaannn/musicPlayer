// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// const PLAYER_STORAGE_KEY = "Tuaan";

// const heading = $("header h2");
// const cdThumb = $(".cd-thumb");
// const audio = $("#audio");
// const cd = $(".cd");
// const playBtn = $(".btn-toggle-play");
// const player = $(".player");
// const progress = $("#progress");
// const nextBtn = $(".btn-next");
// const prevBtn = $(".fa-step-backward");
// const randomBtn = $(".btn-random");
// const repeatBtn = $(".btn-repeat");
// const playlist = $(".playlist");

// const app = {
//     currentIndex: 0,
//     isPlaying: false,
//     isRandom: false,
//     isRepeat: false,
//     config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY) || {}),

//     songs: [
//         {
//             name: "Thuyền Quyên",
//             singer: "Diệu Kiên",
//             path: "./assets/song/ThuyenQuyenOrinnRemix-DieuKien-7805774.mp3",
//             image: "./assets/images/2ec51983dbff681cc3cb7af20b4c7ad2.jpg",
//         },
//         {
//             name: "Daydreams x Last Christmas",
//             singer: "KI AN, Toann",
//             path: "./assets/song/DaydreamsXLastChristmasToannRemix-DangCapNhat-12767407.mp3",
//             image: "./assets/images/chrismas.jpg",
//         },
//         {
//             name: "Cơm Đoàn Viên",
//             singer: "Thành Đạt",
//             path: "./assets/song/ComDoanVien-ThanhDat-8504795.mp3",
//             image: "./assets/images/cơm đoàn viên.jpg",
//         },
//         {
//             name: "Con Hứa Sẽ Về",
//             singer: "Lê Bảo Bình",
//             path: "./assets/song/ConHuaSeVe-LeBaoBinh-8477494.mp3",
//             image: "./assets/images/con hua se ve.jpg",
//         },
//         {
//             name: "Giờ Không Cưới Thì Nào Cưới",
//             singer: "Hồng Quân WyTy, Young P",
//             path: "./assets/song/GioKhongCuoiThiNaoCuoi-HongQuanWyTyYoungP-11721897 (1).mp3",
//             image: "./assets/images/giờ không cưới thì nào cưới.jpg",
//         },
//         {
//             name: "Thương Biệt Ly",
//             singer: "Chu Thúy Quỳnh",
//             path: "./assets/song/ThuongLyBietLoiViet-ChuThuyQuynh-11520445.mp3",
//             image: "./assets/images/Thương biệt ly.jpg",
//         },
//         {
//             name: "Hoa Điêu Thuyên",
//             singer: "Yamix Hầu Ca, Gấu",
//             path: "./assets/song/HoaDieuThuyen-YamixHauCaGau-7802919.mp3",
//             image: "./assets/images/Hoa điêu thuyền.jpg",
//         },
//     ],

//     setConfig: function (key, value) {
//         this.config[key] = value;
//         localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config));
//     },

//     render: function () {
//         const htmls = this.songs.map((song, index) => {
//             return `
//             <div  class="song ${
//                 index === this.currentIndex ? "active" : ""
//             } " data-index = ${index}>
//                 <div
//                     class="thumb"
//                     style="
//                         background-image: url('${song.image}');">
//                 </div>

//                 <div class="body">
//                     <h3 class="title">${song.name}</h3>
//                     <p class="author">${song.singer}</p>
//                 </div>
//                 <div class="option">
//                     <i class="fas fa-ellipsis-h"></i>
//                 </div>
//         </div>`;
//         });

//         playlist.innerHTML = htmls.join("");
//     },

//     defineProperties: function () {
//         Object.defineProperty(this, "currentSong", {
//             get: function () {
//                 return this.songs[this.currentIndex];
//             },
//         });
//     },

//     handleEvents: function () {
//         const cdWidth = cd.offsetWidth;
//         const _this = this;

//         // Xử lý CD quay
//         const cdThumbAnimate = cdThumb.animate(
//             [{ transform: "rotate(360deg)" }],
//             {
//                 iterations: Infinity,
//                 duration: 10000,
//             }
//         );

//         cdThumbAnimate.pause();

//         // Xử lý phóng to/ thu nhỏ CD
//         document.onscroll = function () {
//             const scrollTop =
//                 window.scrollY || document.documentElement.scrollTop;
//             const newCdWidth = cdWidth - scrollTop;
//             cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
//             cd.style.opacity = newCdWidth / cdWidth;
//         };

//         // Xử lý khi Click Play
//         playBtn.onclick = function () {
//             if (_this.isPlaying) {
//                 audio.pause();
//             } else {
//                 audio.play();
//             }
//         };

//         // Khi bài hát được play
//         audio.onplay = function () {
//             _this.isPlaying = true;
//             player.classList.add("playing");
//             cdThumbAnimate.play();
//         };

//         // Khi bài hát dừng
//         audio.onpause = function () {
//             _this.isPlaying = false;
//             player.classList.remove("playing");
//             cdThumbAnimate.pause();
//         };

//         // Khi tiến độ bài hát thay đổi
//         audio.ontimeupdate = function () {
//             if (audio.duration) {
//                 const progressPercent =
//                     (audio.currentTime / audio.duration) * 100;
//                 progress.value = progressPercent;
//             }
//         };

//         //  Xử lý khi tua bài hát

//         progress.oninput = function (e) {
//             const seekTime = (e.target.value * audio.duration) / 100;

//             audio.currentTime = seekTime;
//         };

//         // Khi next bài hát
//         nextBtn.onclick = function () {
//             if (_this.isRandom) {
//                 _this.playRandomSong();
//             } else {
//                 _this.nextSong();
//             }

//             if (_this.isPlaying) {
//                 audio.play();
//             }
//             _this.render();
//             _this.scrollToActiveSong();
//         };

//         // Khi pre bài hát
//         prevBtn.onclick = function () {
//             if (_this.isRandom) {
//                 _this.playRandomSong();
//             } else {
//                 _this.prevSong();
//             }
//             if (_this.isPlaying) {
//                 audio.play();
//             }
//             _this.render();
//             _this.scrollToActiveSong();
//         };

//         // Xử lý bật tắt Random bài hát
//         randomBtn.onclick = function (e) {
//             _this.isRandom = !_this.isRandom;

//             _this.setConfig("isRandom", _this.isRandom);

//             randomBtn.classList.toggle("active", _this.isRandom);
//         };

//         // Xử lý phát lại một bài hát
//         repeatBtn.onclick = function () {
//             _this.isRepeat = !_this.isRepeat;

//             _this.setConfig("isRepeat", _this.isRepeat);

//             repeatBtn.classList.toggle("active", _this.isRepeat);
//         };

//         // xử lý next song khi bài hát kết thúc
//         audio.onended = function () {
//             if (_this.isRandom && !_this.isRepeat) {
//                 _this.playRandomSong();
//             } else if (_this.isRepeat) {
//                 _this.loadCurrentSong();
//             } else {
//                 _this.nextSong();
//             }

//             audio.play();

//             // cach 2
//             // nextBtn.click();
//         };

//         // Lắng nghe hành vi click vào Playlist
//         playlist.onclick = function (e) {
//             const songNode = e.target.closest(".song:not(.active)");

//             if (songNode || e.target.closest(".option")) {
//                 // xử lý khi click vào bài hát

//                 if (songNode) {
//                     _this.currentIndex = Number(songNode.dataset.index);
//                     _this.loadCurrentSong();
//                     _this.render();
//                     audio.play();
//                 }

//                 // Xử lý khi click vào song Option
//                 if (e.target.closest(".option")) {
//                 }
//             }
//         };
//     },

//     scrollToActiveSong: function () {
//         setTimeout(() => {
//             $(".song.active").scrollIntoView({
//                 behavior: "smooth",
//                 block: "nearest",
//             });
//         }, 200);
//     },

//     loadCurrentSong: function () {
//         heading.textContent = this.currentSong.name;
//         cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
//         audio.src = this.currentSong.path;
//     },

//     loadConfig: function () {
//         this.isRandom = this.config.isRandom;
//         this.isRepeat = this.config.isRepeat;
//     },

//     nextSong: function () {
//         this.currentIndex++;
//         if (this.currentIndex >= this.songs.length) {
//             this.currentIndex = 0;
//         }
//         this.loadCurrentSong();
//     },

//     playRandomSong: function () {
//         let newIndex;

//         do {
//             newIndex = Math.floor(Math.random() * this.songs.length);
//         } while (newIndex == this.currentIndex);

//         this.currentIndex = newIndex;
//         this.loadCurrentSong();
//     },

//     prevSong: function () {
//         this.currentIndex--;
//         if (this.currentIndex < 0) {
//             this.currentIndex = this.songs.length - 1;
//         }
//         this.loadCurrentSong();
//     },

//     start: function () {
//         //  gán cấu hình từ config vào ứng dụng
//         this.loadConfig();

//         // Định nghĩa các thuộc tính cho Object
//         this.defineProperties();

//         // Lắng nghe và xử lý các sự kiện Dom Events
//         this.handleEvents();

//         // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
//         this.loadCurrentSong();

//         // Render Danh sách bài hát/ PlayList
//         this.render();

//         // Hiển thị trạng thái ban đầu của Button repeat và random
//         randomBtn.classList.toggle("active", this.isRandom);

//         repeatBtn.classList.toggle("active", this.isRepeat);
//     },
// };

// app.start();

// Tự code

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const playList = $(".playlist");
const cd = $(".cd");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const player = $(".player");
const progress = $(".progress");
const nextBtn = $(".fa-step-forward");
const prevBtn = $(".fa-step-backward");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const songs = $$(".song");

const app = {
    currentIndex: 1,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    songs: [
        {
            name: "Thuyền Quyên",
            singer: "Diệu Kiên",
            path: "./assets/song/ThuyenQuyenOrinnRemix-DieuKien-7805774.mp3",
            image: "./assets/images/2ec51983dbff681cc3cb7af20b4c7ad2.jpg",
        },
        {
            name: "Daydreams x Last Christmas",
            singer: "KI AN, Toann",
            path: "./assets/song/DaydreamsXLastChristmasToannRemix-DangCapNhat-12767407.mp3",
            image: "./assets/images/chrismas.jpg",
        },
        {
            name: "Cơm Đoàn Viên",
            singer: "Thành Đạt",
            path: "./assets/song/ComDoanVien-ThanhDat-8504795.mp3",
            image: "./assets/images/cơm đoàn viên.jpg",
        },
        {
            name: "Con Hứa Sẽ Về",
            singer: "Lê Bảo Bình",
            path: "./assets/song/ConHuaSeVe-LeBaoBinh-8477494.mp3",
            image: "./assets/images/con hua se ve.jpg",
        },
        {
            name: "Giờ Không Cưới Thì Nào Cưới",
            singer: "Hồng Quân WyTy, Young P",
            path: "./assets/song/GioKhongCuoiThiNaoCuoi-HongQuanWyTyYoungP-11721897 (1).mp3",
            image: "./assets/images/giờ không cưới thì nào cưới.jpg",
        },
        {
            name: "Thương Biệt Ly",
            singer: "Chu Thúy Quỳnh",
            path: "./assets/song/ThuongLyBietLoiViet-ChuThuyQuynh-11520445.mp3",
            image: "./assets/images/Thương biệt ly.jpg",
        },
        {
            name: "Hoa Điêu Thuyên",
            singer: "Yamix Hầu Ca, Gấu",
            path: "./assets/song/HoaDieuThuyen-YamixHauCaGau-7802919.mp3",
            image: "./assets/images/Hoa điêu thuyền.jpg",
        },
    ],

    render: function () {
        let htmls = this.songs.map((song, index) => {
            return `
            <div class="song ${
                index === this.currentIndex ? "active" : ""
            }" data-index= ${index}>
                <div class="thumb" style="background-image: url('${
                    song.image
                }')">
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
             </div>
            `;
        });

        playList.innerHTML = htmls.join("");
    },

    handleEventsDom: function () {
        const _this = this;
        const cdWidth = cd.offsetWidth;

        const cdAnimate = cd.animate([{ transform: "rotate(360deg" }], {
            iterations: Infinity,
            duration: 10000,
        });
        cdAnimate.pause();

        document.onscroll = function () {
            const scrollTop =
                window.scrollY || document.documentElement.scrollTop;

            const newCdWidth = cdWidth - scrollTop;

            cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
            cd.style.opacity = newCdWidth / cdWidth;
        };

        playBtn.onclick = function () {
            if (_this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
        };

        audio.onplay = function () {
            _this.isPlaying = true;
            player.classList.add("playing");
            cdAnimate.play();
        };

        audio.onpause = function () {
            _this.isPlaying = false;
            player.classList.remove("playing");
            cdAnimate.pause();
        };

        audio.ontimeupdate = function () {
            if (audio.duration) {
                const progressPercent = Math.floor(
                    (audio.currentTime / audio.duration) * 100
                );
                progress.value = progressPercent;
            }
        };

        progress.oninput = function (e) {
            const seekTime = (e.target.value * audio.duration) / 100;
            audio.currentTime = seekTime;
        };

        nextBtn.onclick = function () {
            if (_this.isRandom) {
                _this.randomSong();
            } else {
                _this.nextSong();
            }
            if (_this.isPlaying) {
                audio.play();
            }

            _this.render();
            _this.scrollIntoView();
        };

        prevBtn.onclick = function () {
            if (_this.isRandom) {
                _this.randomSong();
            } else {
                _this.prevSong();
            }
            if (_this.isPlaying) {
                audio.play();
            }
            _this.render();
        };

        randomBtn.onclick = function () {
            _this.isRandom = !_this.isRandom;
            randomBtn.classList.toggle("active", _this.isRandom);
        };

        repeatBtn.onclick = function () {
            _this.isRepeat = !_this.isRepeat;
            repeatBtn.classList.toggle("active", _this.repeatBtn);
        };

        audio.onended = function () {
            if (_this.isRandom && !_this.isRepeat) {
                _this.randomSong();
            } else if (_this.isRepeat) {
                _this.loadCurrentSong();
            } else {
                _this.nextSong();
            }

            _this.render();
            audio.play();
        };

        playList.onclick = function (e) {
            const songNode = e.target.closest(".song:not(.active)");
            if (songNode || e.target.closest(".option")) {
                if (songNode) {
                    _this.currentIndex = Number(songNode.dataset.index);
                    _this.loadCurrentSong();
                    audio.play();
                    _this.render();
                }
            }
        };
    },

    nextSong: function () {
        this.currentIndex++;
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }

        this.loadCurrentSong();
    },

    prevSong: function () {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }

        this.loadCurrentSong();
    },

    randomSong: function () {
        let newCurrentIndex;
        do {
            newCurrentIndex = Math.floor(Math.random() * this.songs.length);
        } while (newCurrentIndex == this.currentIndex);

        this.currentIndex = newCurrentIndex;
        this.loadCurrentSong();
    },

    loadCurrentSong: function () {
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
    },

    defineProperties: function () {
        Object.defineProperty(this, "currentSong", {
            get: function () {
                return this.songs[this.currentIndex];
            },
        });
    },

    scrollIntoView: function () {
        $(".song.active").scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "end",
        });
    },

    start: function () {
        this.defineProperties();
        this.render();
        this.handleEventsDom();
        this.loadCurrentSong();
    },
};

app.start();
