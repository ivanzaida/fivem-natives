export class SpentOnCasino {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(208))) {
		if (dataView.byteLength !== 208) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get masterBedroom(): number {
		return this.dataView.getInt32(0, true)
	}

	public get masterBedroomAmount(): number {
		return this.dataView.getInt32(8, true)
	}

	public get lounge(): number {
		return this.dataView.getInt32(16, true)
	}

	public get loungeAmount(): number {
		return this.dataView.getInt32(24, true)
	}

	public get spa(): number {
		return this.dataView.getInt32(32, true)
	}

	public get spaAmount(): number {
		return this.dataView.getInt32(40, true)
	}

	public get barParty(): number {
		return this.dataView.getInt32(48, true)
	}

	public get barPartyAmount(): number {
		return this.dataView.getInt32(56, true)
	}

	public get dealer(): number {
		return this.dataView.getInt32(64, true)
	}

	public get dealerAmount(): number {
		return this.dataView.getInt32(72, true)
	}

	public get extraBedroom(): number {
		return this.dataView.getInt32(80, true)
	}

	public get extraBedroomAmount(): number {
		return this.dataView.getInt32(88, true)
	}

	public get extraBedroom2(): number {
		return this.dataView.getInt32(96, true)
	}

	public get extraBedroom2Amount(): number {
		return this.dataView.getInt32(104, true)
	}

	public get mediaRoom(): number {
		return this.dataView.getInt32(112, true)
	}

	public get mediaRoomAmount(): number {
		return this.dataView.getInt32(120, true)
	}

	public get garage(): number {
		return this.dataView.getInt32(128, true)
	}

	public get garageAmount(): number {
		return this.dataView.getInt32(136, true)
	}

	public get colour(): number {
		return this.dataView.getInt32(144, true)
	}

	public get colourAmount(): number {
		return this.dataView.getInt32(152, true)
	}

	public get graphics(): number {
		return this.dataView.getInt32(160, true)
	}

	public get graphicsAmount(): number {
		return this.dataView.getInt32(168, true)
	}

	public get office(): number {
		return this.dataView.getInt32(176, true)
	}

	public get officeAmount(): number {
		return this.dataView.getInt32(184, true)
	}

	public get preset(): number {
		return this.dataView.getInt32(192, true)
	}

	public get presetAmount(): number {
		return this.dataView.getInt32(200, true)
	}
}