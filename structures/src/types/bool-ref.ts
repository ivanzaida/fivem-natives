export class BoolRef {
    public readonly dataView: DataView;

    constructor() {
        this.dataView = new DataView(new ArrayBuffer(8));
    }

    public get value(): boolean {
        return this.dataView.getInt32(0, true) === 1;
    }

    public static fromValue(value: boolean): BoolRef {
        const ptr = new BoolRef();
        ptr.dataView.setInt32(0, value ? 1 : 0, true);
        return ptr;
    }
}