export class StringRef {
    public readonly dataView: DataView;

    public get value(): string {
        let offset = 0;
        const end = this.dataView.byteLength;

        let text = '';
        let val = -1;

        for (let i = 0; i < this.dataView.byteLength; i++) {
            val = this.dataView.getUint8(i);
            if (val === 0) {
                break;
            }
            text += String.fromCharCode(val);
        }
        return text;
    }

    constructor(dataView: DataView) {
        this.dataView = dataView;
    }

    public static fromValue(value: string): StringRef {
        const buffer = new ArrayBuffer(value.length + 1);
        const view = new DataView(buffer);

        for (let i = 0; i < value.length; i++) {
            view.setUint8(i, value.charCodeAt(i));
        }

        view.setUint8(value.length, 0);

        return new StringRef(view);
    }
}