export class PedHeadBlendData {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(80))) {
		if (dataView.byteLength !== 80) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get head0(): number {
		return this.dataView.getInt32(0, true)
	}

	public get head1(): number {
		return this.dataView.getInt32(8, true)
	}

	public get head2(): number {
		return this.dataView.getInt32(16, true)
	}

	public get tex0(): number {
		return this.dataView.getInt32(24, true)
	}

	public get tex1(): number {
		return this.dataView.getInt32(32, true)
	}

	public get tex2(): number {
		return this.dataView.getInt32(40, true)
	}

	public get headBlend(): number {
		return this.dataView.getFloat32(48, true)
	}

	public get texBlend(): number {
		return this.dataView.getFloat32(56, true)
	}

	public get varBlend(): number {
		return this.dataView.getFloat32(64, true)
	}

	public get isParent(): boolean {
		return this.dataView.getInt8(72) === 1;
	}
}