export class StatDate {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(56))) {
		if (dataView.byteLength !== 56) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get year(): number {
		return this.dataView.getInt32(0, true)
	}

	public get month(): number {
		return this.dataView.getInt32(8, true)
	}

	public get day(): number {
		return this.dataView.getInt32(16, true)
	}

	public get hour(): number {
		return this.dataView.getInt32(24, true)
	}

	public get minute(): number {
		return this.dataView.getInt32(32, true)
	}

	public get seconds(): number {
		return this.dataView.getInt32(40, true)
	}

	public get milliseconds(): number {
		return this.dataView.getInt32(48, true)
	}
}