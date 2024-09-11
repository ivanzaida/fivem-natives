export class NetStatisticsInfo {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(48))) {
		if (dataView.byteLength !== 48) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get kernelMemFreeSize(): number {
		return this.dataView.getInt32(0, true)
	}

	public get kernelMemFreeMin(): number {
		return this.dataView.getInt32(8, true)
	}

	public get packetCount(): number {
		return this.dataView.getInt32(16, true)
	}

	public get packetQosCount(): number {
		return this.dataView.getInt32(24, true)
	}

	public get libNetFreeSize(): number {
		return this.dataView.getInt32(32, true)
	}

	public get libNetFreeMin(): number {
		return this.dataView.getInt32(40, true)
	}
}