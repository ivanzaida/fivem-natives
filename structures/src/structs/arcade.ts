export class Arcade {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(160))) {
		if (dataView.byteLength !== 160) {
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

	public get garage(): number {
		return this.dataView.getInt32(16, true)
	}

	public get garageAmount(): number {
		return this.dataView.getInt32(24, true)
	}

	public get sleepingQuarter(): number {
		return this.dataView.getInt32(32, true)
	}

	public get sleepingQuarterAmount(): number {
		return this.dataView.getInt32(40, true)
	}

	public get droneStation(): number {
		return this.dataView.getInt32(48, true)
	}

	public get droneStationAmount(): number {
		return this.dataView.getInt32(56, true)
	}

	public get businessManagement(): number {
		return this.dataView.getInt32(64, true)
	}

	public get businessManagementAmount(): number {
		return this.dataView.getInt32(72, true)
	}

	public get style(): number {
		return this.dataView.getInt32(80, true)
	}

	public get styleAmount(): number {
		return this.dataView.getInt32(88, true)
	}

	public get mural(): number {
		return this.dataView.getInt32(96, true)
	}

	public get muralAmount(): number {
		return this.dataView.getInt32(104, true)
	}

	public get floor(): number {
		return this.dataView.getInt32(112, true)
	}

	public get floorAmount(): number {
		return this.dataView.getInt32(120, true)
	}

	public get neonArt(): number {
		return this.dataView.getInt32(128, true)
	}

	public get neonArtAmount(): number {
		return this.dataView.getInt32(136, true)
	}

	public get highscoreScreen(): number {
		return this.dataView.getInt32(144, true)
	}

	public get highscoreScreenAmount(): number {
		return this.dataView.getInt32(152, true)
	}
}