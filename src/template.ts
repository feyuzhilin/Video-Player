export default function tpm (options) {
    return `
    <div id="y-video-wrap">
        <video src="${options.url}" controls class="yuzhilin-video" id="yvideo"></video>
        <div class="tip-wrap">我是tip</div>
    </div>
    `
}