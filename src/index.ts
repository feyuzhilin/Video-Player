import { YPlayer } from "./components/player"

const yPlayer: YPlayer = new YPlayer({
    el: "yuzhilin-video-wrap",
    url: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
})
yPlayer.init()
