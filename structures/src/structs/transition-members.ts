import { GamerInfo } from './gamer-info'

export class TransitionMembers {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(5384))) {
		if (dataView.byteLength !== 5384) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get memberCount(): number {
		return this.dataView.getInt32(0, true)
	}

	public get memberInfo(): GamerInfo[] {
		return [
			new GamerInfo(new DataView(this.dataView.buffer.slice(8, 168))),
			new GamerInfo(new DataView(this.dataView.buffer.slice(176, 168))),
			new GamerInfo(new DataView(this.dataView.buffer.slice(344, 168))),
			new GamerInfo(new DataView(this.dataView.buffer.slice(512, 168))),
			new GamerInfo(new DataView(this.dataView.buffer.slice(680, 168))),
			new GamerInfo(new DataView(this.dataView.buffer.slice(848, 168))),
			new GamerInfo(new DataView(this.dataView.buffer.slice(1016, 168))),
			new GamerInfo(new DataView(this.dataView.buffer.slice(1184, 168))),
			new GamerInfo(new DataView(this.dataView.buffer.slice(1352, 168))),
			new GamerInfo(new DataView(this.dataView.buffer.slice(1520, 168))),
			new GamerInfo(new DataView(this.dataView.buffer.slice(1688, 168))),
			new GamerInfo(new DataView(this.dataView.buffer.slice(1856, 168))),
			new GamerInfo(new DataView(this.dataView.buffer.slice(2024, 168))),
			new GamerInfo(new DataView(this.dataView.buffer.slice(2192, 168))),
			new GamerInfo(new DataView(this.dataView.buffer.slice(2360, 168))),
			new GamerInfo(new DataView(this.dataView.buffer.slice(2528, 168))),
			new GamerInfo(new DataView(this.dataView.buffer.slice(2696, 168))),
			new GamerInfo(new DataView(this.dataView.buffer.slice(2864, 168))),
			new GamerInfo(new DataView(this.dataView.buffer.slice(3032, 168))),
			new GamerInfo(new DataView(this.dataView.buffer.slice(3200, 168))),
			new GamerInfo(new DataView(this.dataView.buffer.slice(3368, 168))),
			new GamerInfo(new DataView(this.dataView.buffer.slice(3536, 168))),
			new GamerInfo(new DataView(this.dataView.buffer.slice(3704, 168))),
			new GamerInfo(new DataView(this.dataView.buffer.slice(3872, 168))),
			new GamerInfo(new DataView(this.dataView.buffer.slice(4040, 168))),
			new GamerInfo(new DataView(this.dataView.buffer.slice(4208, 168))),
			new GamerInfo(new DataView(this.dataView.buffer.slice(4376, 168))),
			new GamerInfo(new DataView(this.dataView.buffer.slice(4544, 168))),
			new GamerInfo(new DataView(this.dataView.buffer.slice(4712, 168))),
			new GamerInfo(new DataView(this.dataView.buffer.slice(4880, 168))),
			new GamerInfo(new DataView(this.dataView.buffer.slice(5048, 168))),
			new GamerInfo(new DataView(this.dataView.buffer.slice(5216, 168)))
		]
	}
}