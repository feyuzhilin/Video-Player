import tpm from "../template"
interface IOption {
    el: String,
    url: String
}

export class YPlayer {
    private option: IOption
    constructor(option: IOption) {
        this.option = option
    }
    init() {
        const videoel: HTMLElement = document.getElementById(this.option.el as string)
        videoel.innerHTML = tpm(this.option)
    }
}