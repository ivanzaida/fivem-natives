export class GamerHandle {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(104))) {
		if (dataView.byteLength !== 104) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get data1(): number {
		return this.dataView.getInt32(0, true)
	}

	public get data2(): number {
		return this.dataView.getInt32(8, true)
	}

	public get data3(): number {
		return this.dataView.getInt32(16, true)
	}

	public get data4(): number {
		return this.dataView.getInt32(24, true)
	}

	public get data5(): number {
		return this.dataView.getInt32(32, true)
	}

	public get data6(): number {
		return this.dataView.getInt32(40, true)
	}

	public get data7(): number {
		return this.dataView.getInt32(48, true)
	}

	public get data8(): number {
		return this.dataView.getInt32(56, true)
	}

	public get data9(): number {
		return this.dataView.getInt32(64, true)
	}

	public get data10(): number {
		return this.dataView.getInt32(72, true)
	}

	public get data11(): number {
		return this.dataView.getInt32(80, true)
	}

	public get data12(): number {
		return this.dataView.getInt32(88, true)
	}

	public get data13(): number {
		return this.dataView.getInt32(96, true)
	}
}