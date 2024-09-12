export class SpentOnArena {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(112))) {
		if (dataView.byteLength !== 112) {
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

	public get colour(): number {
		return this.dataView.getInt32(48, true)
	}

	public get colourAmount(): number {
		return this.dataView.getInt32(56, true)
	}

	public get floor(): number {
		return this.dataView.getInt32(64, true)
	}

	public get floorAmount(): number {
		return this.dataView.getInt32(72, true)
	}

	public get mechanic(): number {
		return this.dataView.getInt32(80, true)
	}

	public get mechanicAmount(): number {
		return this.dataView.getInt32(88, true)
	}

	public get personalQuarters(): number {
		return this.dataView.getInt32(96, true)
	}

	public get personalQuartersAmount(): number {
		return this.dataView.getInt32(104, true)
	}
}