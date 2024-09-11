export class EnterSessionPack {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(56))) {
		if (dataView.byteLength !== 56) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get enterp_Prop(): number {
		return this.dataView.getInt32(0, true)
	}

	public get enterp_Veh(): number {
		return this.dataView.getInt32(8, true)
	}

	public get enterp_Weapon(): number {
		return this.dataView.getInt32(16, true)
	}

	public get enterp_Tattoo1(): number {
		return this.dataView.getInt32(24, true)
	}

	public get enterp_Tattoo2(): number {
		return this.dataView.getInt32(32, true)
	}

	public get enterp_Clothing1(): number {
		return this.dataView.getInt32(40, true)
	}

	public get enterp_Clothing2(): number {
		return this.dataView.getInt32(48, true)
	}
}