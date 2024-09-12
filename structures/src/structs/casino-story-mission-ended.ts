export class CasinoStoryMissionEnded {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(352))) {
		if (dataView.byteLength !== 352) {
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

	public get kills(): number {
		return this.dataView.getInt32(24, true)
	}

	public get deaths(): number {
		return this.dataView.getInt32(32, true)
	}

	public get cash(): number {
		return this.dataView.getInt32(40, true)
	}

	public get cashStart(): number {
		return this.dataView.getInt32(48, true)
	}

	public get cashEnd(): number {
		return this.dataView.getInt32(56, true)
	}

	public get missionLaunch(): number {
		return this.dataView.getInt32(64, true)
	}

	public get difficulty(): number {
		return this.dataView.getInt32(72, true)
	}

	public get firstPerson(): number {
		return this.dataView.getInt32(80, true)
	}

	public get medal(): number {
		return this.dataView.getInt32(88, true)
	}

	public get teamLivesUsed(): number {
		return this.dataView.getInt32(96, true)
	}

	public get failureReason(): number {
		return this.dataView.getInt32(104, true)
	}

	public get usedQuickRestart(): number {
		return this.dataView.getInt32(112, true)
	}

	public get isHost(): boolean {
		return this.dataView.getInt8(120) === 1;
	}

	public get isSessionVisible(): boolean {
		return this.dataView.getInt8(128) === 1;
	}

	public get leftInProgress(): boolean {
		return this.dataView.getInt8(136) === 1;
	}

	public get spookedCops(): boolean {
		return this.dataView.getInt8(144) === 1;
	}

	public get playingTime(): number {
		return this.dataView.getInt32(152, true)
	}

	public get xp(): number {
		return this.dataView.getInt32(160, true)
	}

	public get suicides(): number {
		return this.dataView.getInt32(168, true)
	}

	public get rank(): number {
		return this.dataView.getInt32(176, true)
	}

	public get crewId(): number {
		return this.dataView.getInt32(184, true)
	}

	public get result(): number {
		return this.dataView.getInt32(192, true)
	}

	public get jobPoints(): number {
		return this.dataView.getInt32(200, true)
	}

	public get usedVoiceChat(): boolean {
		return this.dataView.getInt8(208) === 1;
	}

	public get heistSessionId(): number {
		return this.dataView.getInt32(216, true)
	}

	public get closedJob(): boolean {
		return this.dataView.getInt8(224) === 1;
	}

	public get privateJob(): boolean {
		return this.dataView.getInt8(232) === 1;
	}

	public get fromClosedFreemode(): boolean {
		return this.dataView.getInt8(240) === 1;
	}

	public get fromPrivateFreemode(): boolean {
		return this.dataView.getInt8(248) === 1;
	}

	public get bossUuid(): number {
		return this.dataView.getInt32(256, true)
	}

	public get bossUuid2(): number {
		return this.dataView.getInt32(264, true)
	}

	public get bossType(): number {
		return this.dataView.getInt32(272, true)
	}

	public get failedStealth(): number {
		return this.dataView.getInt32(280, true)
	}

	public get missionId(): number {
		return this.dataView.getInt32(288, true)
	}

	public get missionVariation(): number {
		return this.dataView.getInt32(296, true)
	}

	public get ownPenthouse(): boolean {
		return this.dataView.getInt8(304) === 1;
	}

	public get ownGarage(): boolean {
		return this.dataView.getInt8(312) === 1;
	}

	public get ownOffice(): boolean {
		return this.dataView.getInt8(320) === 1;
	}

	public get houseChipsEarned(): number {
		return this.dataView.getInt32(328, true)
	}

	public get restartPoint(): number {
		return this.dataView.getInt32(336, true)
	}

	public get launchedByPlayer(): boolean {
		return this.dataView.getInt8(344) === 1;
	}
}