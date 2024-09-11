import { Casinometriclight } from './casinometriclight'

export class Blackjackmetriclight {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(168))) {
		if (dataView.byteLength !== 168) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get casinoMetric(): Casinometriclight {
		return new Casinometriclight(new DataView(this.dataView.buffer.slice(0, 128)))
	}

	public get dealerBlackjackCount(): number {
		return this.dataView.getInt32(128, true)
	}

	public get playerBlackjackCount(): number {
		return this.dataView.getInt32(136, true)
	}

	public get surrenderCount(): number {
		return this.dataView.getInt32(144, true)
	}

	public get bustCount(): number {
		return this.dataView.getInt32(152, true)
	}

	public get m_7CardCharlieCount(): number {
		return this.dataView.getInt32(160, true)
	}
}