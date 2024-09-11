export class FmEventAmbientMission {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(96))) {
		if (dataView.byteLength !== 96) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get uid0(): number {
		return this.dataView.getInt32(0, true)
	}

	public get uid1(): number {
		return this.dataView.getInt32(8, true)
	}

	public get playersNotified(): number {
		return this.dataView.getInt32(16, true)
	}

	public get playersParticipating(): number {
		return this.dataView.getInt32(24, true)
	}

	public get playersLeftInProgress(): number {
		return this.dataView.getInt32(32, true)
	}

	public get endReason(): number {
		return this.dataView.getInt32(40, true)
	}

	public get cashEarned(): number {
		return this.dataView.getInt32(48, true)
	}

	public get rpEarned(): number {
		return this.dataView.getInt32(56, true)
	}

	public get notifiedTime(): number {
		return this.dataView.getInt32(64, true)
	}

	public get startTime(): number {
		return this.dataView.getInt32(72, true)
	}

	public get timeTakenToComplete(): number {
		return this.dataView.getInt32(80, true)
	}

	public get timeTakenForObjective(): number {
		return this.dataView.getInt32(88, true)
	}
}