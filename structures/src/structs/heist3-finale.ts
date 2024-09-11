import { StringRef } from '../types/string-ref';

export class Heist3Finale {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(376))) {
		if (dataView.byteLength !== 376) {
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

	public get publicContentId(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(16, 31))).value
	}

	public get playthroughHashMac(): number {
		return this.dataView.getInt32(48, true)
	}

	public get bossId1(): number {
		return this.dataView.getInt32(56, true)
	}

	public get bossId2(): number {
		return this.dataView.getInt32(64, true)
	}

	public get bosstype(): number {
		return this.dataView.getInt32(72, true)
	}

	public get launcherRank(): number {
		return this.dataView.getInt32(80, true)
	}

	public get playerRole(): number {
		return this.dataView.getInt32(88, true)
	}

	public get endingReason(): number {
		return this.dataView.getInt32(96, true)
	}

	public get replay(): number {
		return this.dataView.getInt32(104, true)
	}

	public get rpEarned(): number {
		return this.dataView.getInt32(112, true)
	}

	public get difficult(): boolean {
		return this.dataView.getInt8(120) === 1;
	}

	public get timeTakenToComplete(): number {
		return this.dataView.getInt32(128, true)
	}

	public get checkpoint(): number {
		return this.dataView.getInt32(136, true)
	}

	public get playCount(): number {
		return this.dataView.getInt32(144, true)
	}

	public get approachBoard(): number {
		return this.dataView.getInt32(152, true)
	}

	public get approachDirect(): boolean {
		return this.dataView.getInt8(160) === 1;
	}

	public get wCrew(): number {
		return this.dataView.getInt32(168, true)
	}

	public get wLoadout(): number {
		return this.dataView.getInt32(176, true)
	}

	public get dCrew(): number {
		return this.dataView.getInt32(184, true)
	}

	public get vehicleGetaway(): number {
		return this.dataView.getInt32(192, true)
	}

	public get vehicleSwap(): number {
		return this.dataView.getInt32(200, true)
	}

	public get hCrew(): number {
		return this.dataView.getInt32(208, true)
	}

	public get outfitIn(): number {
		return this.dataView.getInt32(216, true)
	}

	public get outfitOut(): number {
		return this.dataView.getInt32(224, true)
	}

	public get mask(): number {
		return this.dataView.getInt32(232, true)
	}

	public get vehicleSwapped(): number {
		return this.dataView.getInt32(240, true)
	}

	public get useEMP(): number {
		return this.dataView.getInt32(248, true)
	}

	public get useDrone(): number {
		return this.dataView.getInt32(256, true)
	}

	public get useThermite(): number {
		return this.dataView.getInt32(264, true)
	}

	public get useKeycard(): number {
		return this.dataView.getInt32(272, true)
	}

	public get hack(): number {
		return this.dataView.getInt32(280, true)
	}

	public get cameras(): number {
		return this.dataView.getInt32(288, true)
	}

	public get accessPoints(): number {
		return this.dataView.getInt32(296, true)
	}

	public get vaultTarget(): number {
		return this.dataView.getInt32(304, true)
	}

	public get vaultAmt(): number {
		return this.dataView.getInt32(312, true)
	}

	public get dailyCashRoomAmt(): number {
		return this.dataView.getInt32(320, true)
	}

	public get depositBoxAmt(): number {
		return this.dataView.getInt32(328, true)
	}

	public get percentage(): number {
		return this.dataView.getInt32(336, true)
	}

	public get deaths(): number {
		return this.dataView.getInt32(344, true)
	}

	public get targetsKilled(): number {
		return this.dataView.getInt32(352, true)
	}

	public get innocentsKilled(): number {
		return this.dataView.getInt32(360, true)
	}

	public get buyerLocation(): number {
		return this.dataView.getInt32(368, true)
	}
}