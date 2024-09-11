export class DispatchEnded {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(72))) {
		if (dataView.byteLength !== 72) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get matchCreator(): number {
		return this.dataView.getInt32(0, true)
	}

	public get sessionType(): number {
		return this.dataView.getInt32(8, true)
	}

	public get playlistId(): number {
		return this.dataView.getInt32(16, true)
	}

	public get launchMethod(): number {
		return this.dataView.getInt32(24, true)
	}

	public get endingReason(): number {
		return this.dataView.getInt32(32, true)
	}

	public get timeTakenToComplete(): number {
		return this.dataView.getInt32(40, true)
	}

	public get targetsKilled(): number {
		return this.dataView.getInt32(48, true)
	}

	public get cashEarned(): number {
		return this.dataView.getInt32(56, true)
	}

	public get rpEarned(): number {
		return this.dataView.getInt32(64, true)
	}
}