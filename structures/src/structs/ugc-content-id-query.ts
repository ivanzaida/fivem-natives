import { StringRef } from '../types/string-ref';

export class UgcContentIdQuery {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(1536))) {
		if (dataView.byteLength !== 1536) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get contentId(): string[] {
		return [
			new StringRef(new DataView(this.dataView.buffer.slice(0, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(24, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(48, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(72, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(96, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(120, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(144, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(168, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(192, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(216, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(240, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(264, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(288, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(312, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(336, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(360, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(384, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(408, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(432, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(456, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(480, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(504, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(528, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(552, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(576, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(600, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(624, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(648, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(672, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(696, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(720, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(744, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(768, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(792, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(816, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(840, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(864, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(888, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(912, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(936, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(960, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(984, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1008, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1032, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1056, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1080, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1104, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1128, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1152, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1176, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1200, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1224, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1248, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1272, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1296, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1320, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1344, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1368, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1392, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1416, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1440, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1464, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1488, 23))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1512, 23))).value
		]
	}
}