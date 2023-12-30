const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const cd = $(".cd");
const playBtn = $(".btn-toggle-play");
const player = $(".player");
const progress = $("#progress");
const nextBtn = $(".btn-next");
const prevBtn = $(".fa-step-backward");
const randomBtn = $(".btn-random");

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,

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
        const htmls = this.songs.map((song) => {
            return `
            <div class="song">
                <div
                    class="thumb"
                    style="
                        background-image: url('${song.image}');">
                </div>

                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
        </div>`;
        });

        $(".playlist").innerHTML = htmls.join("");
    },

    defineProperties: function () {
        Object.defineProperty(this, "currentSong", {
            get: function () {
                return this.songs[this.currentIndex];
            },
        });
    },

    handleEvents: function () {
        const cdWidth = cd.offsetWidth;
        const _this = this;

        // Xử lý CD quay
        const cdThumbAnimate = cdThumb.animate(
            [{ transform: "rotate(360deg)" }],
            {
                iterations: Infinity,
                duration: 10000,
            }
        );

        cdThumbAnimate.pause();

        // Xử lý phóng to/ thu nhỏ CD
        document.onscroll = function () {
            const scrollTop =
                window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop;
            cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
            cd.style.opacity = newCdWidth / cdWidth;
        };

        // Xử lý khi Click Play
        playBtn.onclick = function () {
            if (_this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
        };

        // Khi bài hát được play
        audio.onplay = function () {
            _this.isPlaying = true;
            player.classList.add("playing");
            cdThumbAnimate.play();
        };

        // Khi bài hát dừng
        audio.onpause = function () {
            _this.isPlaying = false;
            player.classList.remove("playing");
            cdThumbAnimate.pause();
        };

        // Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function () {
            if (audio.duration) {
                const progressPercent =
                    (audio.currentTime / audio.duration) * 100;
                progress.value = progressPercent;
            }
        };

        //  Xử lý khi tua bài hát

        progress.oninput = function (e) {
            const seekTime = (e.target.value * audio.duration) / 100;

            audio.currentTime = seekTime;
        };

        // Khi next bài hát
        nextBtn.onclick = function () {
            if (_this.isRandom) {
                _this.playRandomSong();
            } else {
                _this.nextSong();
            }

            if (_this.isPlaying) {
                audio.play();
            }
        };

        // Khi pre bài hát
        prevBtn.onclick = function () {
            if (_this.isRandom) {
                _this.playRandomSong();
            } else {
                _this.prevSong();
            }
            if (_this.isPlaying) {
                audio.play();
            }
        };

        // Xử lý bật tắt Random bài hát
        randomBtn.onclick = function (e) {
            _this.isRandom = !_this.isRandom;
            randomBtn.classList.toggle("active", _this.isRandom);
        };
    },

    loadCurrentSong: function () {
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
    },

    nextSong: function () {
        this.currentIndex++;
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },

    playRandomSong: function () {
        let newIndex;

        do {
            newIndex = Math.floor(Math.random() * this.songs.length);
        } while (newIndex == this.currentIndex);

        this.currentIndex = newIndex;
        this.loadCurrentSong();
    },

    prevSong: function () {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
    },

    start: function () {
        // Định nghĩa các thuộc tính cho Object
        this.defineProperties();

        // Lắng nghe và xử lý các sự kiện Dom Events
        this.handleEvents();

        // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
        this.loadCurrentSong();

        // Render Danh sách bài hát/ PlayList
        this.render();
    },
};

app.start();

// Tự code

// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// const playList = $(".playlist");
// const cd = $(".cd");
// const heading = $("header h2");
// const cdThumb = $(".cd-thumb");
// const audio = $("#audio");
// const playBtn = $(".btn-toggle-play");
// const player = $(".player");
// const progress = $(".progress");
// const nextBtn = $(".fa-step-forward");
// const prevBtn = $(".fa-step-backward");
// const ranomBtn = $(".btn-random");

// const app = {
//     currentIndex: 1,
//     isPlaying: false,
//     isRandom: false,
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

//     render: function () {
//         let htmls = this.songs.map((song) => {
//             return `
//             <div class="song">
//                 <div class="thumb" style="background-image: url('${song.image}')">
//                 </div>
//                 <div class="body">
//                     <h3 class="title">${song.name}</h3>
//                     <p class="author">${song.singer}</p>
//                 </div>
//                 <div class="option">
//                     <i class="fas fa-ellipsis-h"></i>
//                 </div>
//              </div>
//             `;
//         });

//         playList.innerHTML = htmls.join("");
//     },

//     defineProperties: function () {
//         Object.defineProperty(this, "currentSong", {
//             get: function () {
//                 return this.songs[this.currentIndex];
//             },
//         });
//     },

//     handleEventsDom: function () {
//         const cdWidth = cd.offsetWidth;
//         const _this = this;

//         document.onscroll = function () {
//             const scrollTop =
//                 window.scrollY || document.documentElement.scrollTop;

//             newCdWidth = cdWidth - scrollTop;

//             cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
//             cd.style.opacity = newCdWidth / cdWidth;
//         };

//         const cdAnimate = cd.animate([{ transform: "rotate(360deg" }], {
//             duration: 10000,
//             iterations: Infinity,
//         });

//         cdAnimate.pause();

//         playBtn.onclick = function () {
//             if (_this.isPlaying) {
//                 audio.pause();
//             } else {
//                 audio.play();
//             }
//         };

//         audio.onplay = function () {
//             _this.isPlaying = true;
//             cdAnimate.play();
//             player.classList.add("playing");
//         };

//         audio.onpause = function () {
//             _this.isPlaying = false;
//             cdAnimate.pause();
//             player.classList.remove("playing");
//         };

//         audio.ontimeupdate = function () {
//             if (audio.duration) {
//                 progressPercent = Math.floor(
//                     (audio.currentTime / audio.duration) * 100
//                 );

//                 progress.value = progressPercent;
//             }
//         };

//         progress.oninput = function () {
//             const seekTime = (progress.value * audio.duration) / 100;
//             audio.currentTime = seekTime;
//         };

//         nextBtn.onclick = function () {
//             if (_this.isRandom) {
//                 _this.playRandomSong();
//             } else {
//                 _this.nextSong();
//             }
//             if (_this.isPlaying) {
//                 audio.play();
//             }
//         };

//         prevBtn.onclick = function () {
//             if (_this.isRandom) {
//                 _this.playRandomSong();
//             } else {
//                 _this.prevSong();
//             }
//             if (_this.isPlaying) {
//                 audio.play();
//             }
//         };

//         ranomBtn.onclick = function () {
//             _this.isRandom = !_this.isRandom;
//             ranomBtn.classList.toggle("active", _this.isRandom);
//         };
//     },

//     loadCurrentSong: function () {
//         heading.textContent = this.currentSong.name;
//         cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
//         audio.src = this.currentSong.path;
//     },

//     nextSong: function () {
//         this.currentIndex++;
//         if (this.currentIndex >= this.songs.length) {
//             this.currentIndex = 0;
//         }
//         this.loadCurrentSong();
//     },

//     prevSong: function () {
//         this.currentIndex--;
//         if (this.currentIndex < 0) {
//             this.currentIndex = this.songs.length - 1;
//         }
//         this.loadCurrentSong();
//     },

//     playRandomSong: function () {
//         let newCurrentIndext;
//         do {
//             newCurrentIndext = Math.floor(Math.random() * this.songs.length);
//         } while (newCurrentIndext == this.currentIndex);

//         this.currentIndex = newCurrentIndext;
//         this.loadCurrentSong();
//     },

//     start: function () {
//         this.defineProperties();
//         this.loadCurrentSong();
//         this.render();
//         this.handleEventsDom();
//     },
// };

// app.start();
