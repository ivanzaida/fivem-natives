import { StringRef } from '../types/string-ref';

export class RobberyFinale {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(248))) {
		if (dataView.byteLength !== 248) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get playthroughId(): number {
		return this.dataView.getInt32(0, true)
	}

	public get missionId(): number {
		return this.dataView.getInt32(8, true)
	}

	public get sessionId(): number {
		return this.dataView.getInt32(16, true)
	}

	public get strandId(): number {
		return this.dataView.getInt32(24, true)
	}

	public get publicContentId(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(32, 31))).value
	}

	public get bossId1(): number {
		return this.dataView.getInt32(64, true)
	}

	public get bossId2(): number {
		return this.dataView.getInt32(72, true)
	}

	public get bosstype(): number {
		return this.dataView.getInt32(80, true)
	}

	public get launcherRank(): number {
		return this.dataView.getInt32(88, true)
	}

	public get playerRole(): number {
		return this.dataView.getInt32(96, true)
	}

	public get endingReason(): number {
		return this.dataView.getInt32(104, true)
	}

	public get replay(): number {
		return this.dataView.getInt32(112, true)
	}

	public get rpEarned(): number {
		return this.dataView.getInt32(120, true)
	}

	public get timeTakenToComplete(): number {
		return this.dataView.getInt32(128, true)
	}

	public get checkpoint(): number {
		return this.dataView.getInt32(136, true)
	}

	public get deaths(): number {
		return this.dataView.getInt32(144, true)
	}

	public get targetsKilled(): number {
		return this.dataView.getInt32(152, true)
	}

	public get innocentsKilled(): number {
		return this.dataView.getInt32(160, true)
	}

	public get properties(): number {
		return this.dataView.getInt32(168, true)
	}

	public get properties2(): number {
		return this.dataView.getInt32(176, true)
	}

	public get failedStealth(): boolean {
		return this.dataView.getInt8(184) === 1;
	}

	public get wLoadout(): number {
		return this.dataView.getInt32(192, true)
	}

	public get outfits(): number {
		return this.dataView.getInt32(200, true)
	}

	public get moneyEarned(): number {
		return this.dataView.getInt32(208, true)
	}

	public get vehicleBoard(): number {
		return this.dataView.getInt32(216, true)
	}

	public get hashmac(): number {
		return this.dataView.getInt32(224, true)
	}

	public get missionCategory(): number {
		return this.dataView.getInt32(232, true)
	}

	public get won(): boolean {
		return this.dataView.getInt8(240) === 1;
	}
}