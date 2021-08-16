
export default class Tip {
    constructor() {
        const videowrap: HTMLElement = document.getElementById("y-video-wrap")
        let tipModel = `
            我是tip
        `
        let tipModelNode = document.createElement('div')
        tipModelNode.className = 'tip-wrap'
        tipModelNode.innerHTML = tipModel
        videowrap.appendChild(tipModelNode)
    }
}