export class ArcadeCabinet {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(88))) {
		if (dataView.byteLength !== 88) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get gameType(): number {
		return this.dataView.getInt32(0, true)
	}

	public get matchId(): number {
		return this.dataView.getInt32(8, true)
	}

	public get numPlayers(): number {
		return this.dataView.getInt32(16, true)
	}

	public get level(): number {
		return this.dataView.getInt32(24, true)
	}

	public get powerUps(): number {
		return this.dataView.getInt32(32, true)
	}

	public get kills(): number {
		return this.dataView.getInt32(40, true)
	}

	public get timePlayed(): number {
		return this.dataView.getInt32(48, true)
	}

	public get score(): number {
		return this.dataView.getInt32(56, true)
	}

	public get reward(): number {
		return this.dataView.getInt32(64, true)
	}

	public get challenges(): number {
		return this.dataView.getInt32(72, true)
	}

	public get location(): number {
		return this.dataView.getInt32(80, true)
	}
}