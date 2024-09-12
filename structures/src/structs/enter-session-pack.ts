export class EnterSessionPack {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(56))) {
		if (dataView.byteLength !== 56) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get enterpProp(): number {
		return this.dataView.getInt32(0, true)
	}

	public get enterpVeh(): number {
		return this.dataView.getInt32(8, true)
	}

	public get enterpWeapon(): number {
		return this.dataView.getInt32(16, true)
	}

	public get enterpTattoo1(): number {
		return this.dataView.getInt32(24, true)
	}

	public get enterpTattoo2(): number {
		return this.dataView.getInt32(32, true)
	}

	public get enterpClothing1(): number {
		return this.dataView.getInt32(40, true)
	}

	public get enterpClothing2(): number {
		return this.dataView.getInt32(48, true)
	}
}