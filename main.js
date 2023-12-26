// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// const heading = $("header h2");
// const cdThumb = $(".cd-thumb");
// const audio = $("#audio");
// const cd = $(".cd");
// const playBtn = $(".btn-toggle-play");
// const player = $(".player");

// const app = {
//     currentIndex: 0,
//     isPlaying: false,

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
//         const htmls = this.songs.map((song) => {
//             return `
//             <div class="song">
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

//         $(".playlist").innerHTML = htmls.join("");
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
//                 _this.isPlaying = false;
//                 player.classList.remove("playing");
//                 audio.pause();
//             } else {
//                 _this.isPlaying = true;
//                 audio.play();
//                 player.classList.add("playing");
//             }
//         };
//     },

//     loadCurrentSong: function () {
//         heading.textContent = this.currentSong.name;
//         cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
//         audio.src = this.currentSong.path;
//     },

//     loadCurrentSong: function () {
//         heading.innerHTML = this.currentSong.name;
//         cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
//         audio.src = this.currentSong.path;
//     },

//     start: function () {
//         // Định nghĩa các thuộc tính cho Object
//         this.defineProperties();

//         // Lắng nghe và xử lý các sự kiện Dom Events
//         this.handleEvents();

//         // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
//         this.loadCurrentSong();

//         // Render Danh sách bài hát/ PlayList
//         this.render();
//     },
// };

// app.start();

// Tự code

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const cd = $(".cd");
const playBtn = $(".btn-toggle-play");
const player = $(".player");

const app = {
    currentIndex: 0,
    isPlaying: false,

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

    handleEventDoms: function () {
        const cdWidth = cd.offsetWidth;
        const _this = this;

        document.onscroll = function () {
            const scrollTop =
                window.scrollY || document.documentElement.scrollTop;

            const newCdWidth = cdWidth - scrollTop;

            cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;

            cd.style.opacity = newCdWidth / cdWidth;
        };

        playBtn.onclick = function () {
            if (_this.isPlaying) {
                _this.isPlaying = false;
                audio.pause();
                player.classList.remove("playing");
            } else {
                _this.isPlaying = true;
                audio.play();
                player.classList.add("playing");
            }
        };
    },

    loadCurrentSong: function () {
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url("${this.currentSong.image}")`;
        audio.src = this.currentSong.path;
    },

    defineProperties: function () {
        Object.defineProperty(this, "currentSong", {
            get: function () {
                return this.songs[this.currentIndex];
            },
        });
    },

    start: function () {
        this.defineProperties();

        this.loadCurrentSong();

        this.render();

        this.handleEventDoms();
    },
};

app.start();
