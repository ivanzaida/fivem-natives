export class InviteArrivedEvent {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(24))) {
		if (dataView.byteLength !== 24) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get inviteIndex(): number {
		return this.dataView.getInt32(0, true)
	}

	public get gameMode(): number {
		return this.dataView.getInt32(8, true)
	}

	public get isFriend(): boolean {
		return this.dataView.getInt8(16) === 1;
	}
}