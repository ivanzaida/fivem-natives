import { JobBInfo } from './job-b-info'

export class InstancedHeistEnded {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(520))) {
		if (dataView.byteLength !== 520) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get infos(): JobBInfo {
		return new JobBInfo(new DataView(this.dataView.buffer.slice(0, 368)))
	}

	public get bossId1(): number {
		return this.dataView.getInt32(368, true)
	}

	public get bossId2(): number {
		return this.dataView.getInt32(376, true)
	}

	public get bossType(): number {
		return this.dataView.getInt32(384, true)
	}

	public get attackType(): number {
		return this.dataView.getInt32(392, true)
	}

	public get ownBase(): number {
		return this.dataView.getInt32(400, true)
	}

	public get ownCannon(): number {
		return this.dataView.getInt32(408, true)
	}

	public get ownSecurityRoom(): number {
		return this.dataView.getInt32(416, true)
	}

	public get ownLounge(): number {
		return this.dataView.getInt32(424, true)
	}

	public get ownLivingQuarters(): number {
		return this.dataView.getInt32(432, true)
	}

	public get ownTiltRotor(): number {
		return this.dataView.getInt32(440, true)
	}

	public get orbitalCannonShots(): number {
		return this.dataView.getInt32(448, true)
	}

	public get orbitalCannonKills(): number {
		return this.dataView.getInt32(456, true)
	}

	public get assasinationLevel1Calls(): number {
		return this.dataView.getInt32(464, true)
	}

	public get assasinationLevel2Calls(): number {
		return this.dataView.getInt32(472, true)
	}

	public get assasinationLevel3Calls(): number {
		return this.dataView.getInt32(480, true)
	}

	public get observeTargetCalls(): number {
		return this.dataView.getInt32(488, true)
	}

	public get prepCompletionType(): number {
		return this.dataView.getInt32(496, true)
	}

	public get failedStealth(): number {
		return this.dataView.getInt32(504, true)
	}

	public get quickRestart(): number {
		return this.dataView.getInt32(512, true)
	}
}