import { Casinometric } from './casinometric'

export class Luckysevenmetric {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(192))) {
		if (dataView.byteLength !== 192) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get casinoMetric(): Casinometric {
		return new Casinometric(new DataView(this.dataView.buffer.slice(0, 168)))
	}

	public get rewardType(): number {
		return this.dataView.getInt32(168, true)
	}

	public get rewardItem(): number {
		return this.dataView.getInt32(176, true)
	}

	public get rewardAmount(): number {
		return this.dataView.getInt32(184, true)
	}
}