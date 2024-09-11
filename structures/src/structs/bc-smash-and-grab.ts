import { BcBossChallenge } from './bc-boss-challenge'

export class BcSmashAndGrab {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(152))) {
		if (dataView.byteLength !== 152) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get data(): BcBossChallenge {
		return new BcBossChallenge(new DataView(this.dataView.buffer.slice(0, 112)))
	}

	public get deaths(): number {
		return this.dataView.getInt32(112, true)
	}

	public get storesHeldUp(): number {
		return this.dataView.getInt32(120, true)
	}

	public get deliveriesMade(): number {
		return this.dataView.getInt32(128, true)
	}

	public get cashLost(): number {
		return this.dataView.getInt32(136, true)
	}

	public get cashDelivered(): number {
		return this.dataView.getInt32(144, true)
	}
}