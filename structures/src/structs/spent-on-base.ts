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

	public get location_amount(): number {
		return this.dataView.getInt32(8, true)
	}

	public get style(): number {
		return this.dataView.getInt32(16, true)
	}

	public get style_amount(): number {
		return this.dataView.getInt32(24, true)
	}

	public get graphics(): number {
		return this.dataView.getInt32(32, true)
	}

	public get graphics_amount(): number {
		return this.dataView.getInt32(40, true)
	}

	public get orbcannon(): number {
		return this.dataView.getInt32(48, true)
	}

	public get orbcannon_amount(): number {
		return this.dataView.getInt32(56, true)
	}

	public get secroom(): number {
		return this.dataView.getInt32(64, true)
	}

	public get secroom_amount(): number {
		return this.dataView.getInt32(72, true)
	}

	public get lounge(): number {
		return this.dataView.getInt32(80, true)
	}

	public get lounge_amount(): number {
		return this.dataView.getInt32(88, true)
	}

	public get livingquarter(): number {
		return this.dataView.getInt32(96, true)
	}

	public get livingquarter_amount(): number {
		return this.dataView.getInt32(104, true)
	}

	public get privacyglass(): number {
		return this.dataView.getInt32(112, true)
	}

	public get privacyglass_amount(): number {
		return this.dataView.getInt32(120, true)
	}
}