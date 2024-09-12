export class SpentOnBunker {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(96))) {
		if (dataView.byteLength !== 96) {
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

	public get personalquarter(): number {
		return this.dataView.getInt32(32, true)
	}

	public get personalquarterAmount(): number {
		return this.dataView.getInt32(40, true)
	}

	public get firingrange(): number {
		return this.dataView.getInt32(48, true)
	}

	public get firingrangeAmount(): number {
		return this.dataView.getInt32(56, true)
	}

	public get gunlocker(): number {
		return this.dataView.getInt32(64, true)
	}

	public get gunlockerAmount(): number {
		return this.dataView.getInt32(72, true)
	}

	public get caddy(): number {
		return this.dataView.getInt32(80, true)
	}

	public get caddyAmount(): number {
		return this.dataView.getInt32(88, true)
	}
}