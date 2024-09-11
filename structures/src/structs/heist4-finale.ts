import { StringRef } from '../types/string-ref';

export class Heist4Finale {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(584))) {
		if (dataView.byteLength !== 584) {
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

	public get publicContentId(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(24, 31))).value
	}

	public get hashmac(): number {
		return this.dataView.getInt32(56, true)
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

	public get difficult(): boolean {
		return this.dataView.getInt8(128) === 1;
	}

	public get timeTakenToComplete(): number {
		return this.dataView.getInt32(136, true)
	}

	public get checkpoint(): number {
		return this.dataView.getInt32(144, true)
	}

	public get playCount(): number {
		return this.dataView.getInt32(152, true)
	}

	public get deaths(): number {
		return this.dataView.getInt32(160, true)
	}

	public get targetsKilled(): number {
		return this.dataView.getInt32(168, true)
	}

	public get innocentsKilled(): number {
		return this.dataView.getInt32(176, true)
	}

	public get properties(): number {
		return this.dataView.getInt32(184, true)
	}

	public get properties2(): number {
		return this.dataView.getInt32(192, true)
	}

	public get percentage(): number {
		return this.dataView.getInt32(200, true)
	}

	public get tod(): number {
		return this.dataView.getInt32(208, true)
	}

	public get wLoadout(): number {
		return this.dataView.getInt32(216, true)
	}

	public get outfits(): number {
		return this.dataView.getInt32(224, true)
	}

	public get suppressors(): boolean {
		return this.dataView.getInt8(232) === 1;
	}

	public get supCrewBoard(): number {
		return this.dataView.getInt32(240, true)
	}

	public get islApproach(): number {
		return this.dataView.getInt32(248, true)
	}

	public get islEscBoard(): number {
		return this.dataView.getInt32(256, true)
	}

	public get primTar(): number {
		return this.dataView.getInt32(264, true)
	}

	public get weather(): number {
		return this.dataView.getInt32(272, true)
	}

	public get weapDisrup(): number {
		return this.dataView.getInt32(280, true)
	}

	public get supCrewActual(): number {
		return this.dataView.getInt32(288, true)
	}

	public get miscActions(): number {
		return this.dataView.getInt32(296, true)
	}

	public get compEntrance(): number {
		return this.dataView.getInt32(304, true)
	}

	public get primTarEntrance(): number {
		return this.dataView.getInt32(312, true)
	}

	public get compExit(): number {
		return this.dataView.getInt32(320, true)
	}

	public get interestItemUsed(): number {
		return this.dataView.getInt32(328, true)
	}

	public get islEscActual(): number {
		return this.dataView.getInt32(336, true)
	}

	public get failedStealth(): boolean {
		return this.dataView.getInt8(344) === 1;
	}

	public get specCam(): boolean {
		return this.dataView.getInt8(352) === 1;
	}

	public get moneyEarned(): number {
		return this.dataView.getInt32(360, true)
	}

	public get secLoot(): number {
		return this.dataView.getInt32(368, true)
	}

	public get secTarCash(): number {
		return this.dataView.getInt32(376, true)
	}

	public get secTarCocaine(): number {
		return this.dataView.getInt32(384, true)
	}

	public get secTarWeed(): number {
		return this.dataView.getInt32(392, true)
	}

	public get secTarGold(): number {
		return this.dataView.getInt32(400, true)
	}

	public get secTarPaint(): number {
		return this.dataView.getInt32(408, true)
	}

	public get bagCapacity(): number {
		return this.dataView.getInt32(416, true)
	}

	public get cashBlocksStolen(): number {
		return this.dataView.getInt32(424, true)
	}

	public get cashValueFinal(): number {
		return this.dataView.getInt32(432, true)
	}

	public get cashBlocksFinal(): number {
		return this.dataView.getInt32(440, true)
	}

	public get cashBlocksSpace(): number {
		return this.dataView.getInt32(448, true)
	}

	public get cocaBlocksStolen(): number {
		return this.dataView.getInt32(456, true)
	}

	public get cocaValueFinal(): number {
		return this.dataView.getInt32(464, true)
	}

	public get cocaBlocksFinal(): number {
		return this.dataView.getInt32(472, true)
	}

	public get cocaBlocksSpace(): number {
		return this.dataView.getInt32(480, true)
	}

	public get weedBlocksStolen(): number {
		return this.dataView.getInt32(488, true)
	}

	public get weedValueFinal(): number {
		return this.dataView.getInt32(496, true)
	}

	public get weedBlocksFinal(): number {
		return this.dataView.getInt32(504, true)
	}

	public get weedBlocksSpace(): number {
		return this.dataView.getInt32(512, true)
	}

	public get goldBlocksStolen(): number {
		return this.dataView.getInt32(520, true)
	}

	public get goldValueFinal(): number {
		return this.dataView.getInt32(528, true)
	}

	public get goldBlocksFinal(): number {
		return this.dataView.getInt32(536, true)
	}

	public get goldBlocksSpace(): number {
		return this.dataView.getInt32(544, true)
	}

	public get paintBlocksStolen(): number {
		return this.dataView.getInt32(552, true)
	}

	public get paintValueFinal(): number {
		return this.dataView.getInt32(560, true)
	}

	public get paintBlocksFinal(): number {
		return this.dataView.getInt32(568, true)
	}

	public get paintBlocksSpace(): number {
		return this.dataView.getInt32(576, true)
	}
}