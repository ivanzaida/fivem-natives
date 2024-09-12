export class SpentOnBase {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(128))) {
		if (dataView.byteLength !== 128) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get location(): number {
		return this.dataView.getInt32(0, true)
	}

	public get locationAmount(): number {
		return this.dataView.getInt32(8, true)
	}

	public get style(): number {
		return this.dataView.getInt32(16, true)
	}

	public get styleAmount(): number {
		return this.dataView.getInt32(24, true)
	}

	public get graphics(): number {
		return this.dataView.getInt32(32, true)
	}

	public get graphicsAmount(): number {
		return this.dataView.getInt32(40, true)
	}

	public get orbcannon(): number {
		return this.dataView.getInt32(48, true)
	}

	public get orbcannonAmount(): number {
		return this.dataView.getInt32(56, true)
	}

	public get secroom(): number {
		return this.dataView.getInt32(64, true)
	}

	public get secroomAmount(): number {
		return this.dataView.getInt32(72, true)
	}

	public get lounge(): number {
		return this.dataView.getInt32(80, true)
	}

	public get loungeAmount(): number {
		return this.dataView.getInt32(88, true)
	}

	public get livingquarter(): number {
		return this.dataView.getInt32(96, true)
	}

	public get livingquarterAmount(): number {
		return this.dataView.getInt32(104, true)
	}

	public get privacyglass(): number {
		return this.dataView.getInt32(112, true)
	}

	public get privacyglassAmount(): number {
		return this.dataView.getInt32(120, true)
	}
}