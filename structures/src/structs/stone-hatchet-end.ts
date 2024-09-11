export class StoneHatchetEnd {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(104))) {
		if (dataView.byteLength !== 104) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get timespent(): number {
		return this.dataView.getInt32(0, true)
	}

	public get result(): number {
		return this.dataView.getInt32(8, true)
	}

	public get cashearned(): number {
		return this.dataView.getInt32(16, true)
	}

	public get rpearned(): number {
		return this.dataView.getInt32(24, true)
	}

	public get location(): number {
		return this.dataView.getInt32(32, true)
	}

	public get target(): number {
		return this.dataView.getInt32(40, true)
	}

	public get targetX(): number {
		return this.dataView.getFloat32(48, true)
	}

	public get targetY(): number {
		return this.dataView.getFloat32(56, true)
	}

	public get targetEvasionChoice(): number {
		return this.dataView.getInt32(64, true)
	}

	public get damagedealt(): number {
		return this.dataView.getFloat32(72, true)
	}

	public get damagerecieved(): number {
		return this.dataView.getFloat32(80, true)
	}

	public get capturedorkilled(): boolean {
		return this.dataView.getInt8(88) === 1;
	}

	public get chestfound(): boolean {
		return this.dataView.getInt8(96) === 1;
	}
}