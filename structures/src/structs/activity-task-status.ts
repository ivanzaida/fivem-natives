import { StringRef } from '../types/string-ref';

export class ActivityTaskStatus {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(4096))) {
		if (dataView.byteLength !== 4096) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get inProgressTasks(): string[] {
		return [
			new StringRef(new DataView(this.dataView.buffer.slice(0, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(64, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(128, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(192, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(256, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(320, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(384, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(448, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(512, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(576, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(640, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(704, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(768, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(832, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(896, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(960, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1024, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1088, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1152, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1216, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1280, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1344, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1408, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1472, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1536, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1600, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1664, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1728, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1792, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1856, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1920, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(1984, 63))).value
		]
	}

	public get completedTasks(): string[] {
		return [
			new StringRef(new DataView(this.dataView.buffer.slice(2048, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(2112, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(2176, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(2240, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(2304, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(2368, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(2432, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(2496, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(2560, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(2624, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(2688, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(2752, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(2816, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(2880, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(2944, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(3008, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(3072, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(3136, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(3200, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(3264, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(3328, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(3392, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(3456, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(3520, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(3584, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(3648, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(3712, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(3776, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(3840, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(3904, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(3968, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(4032, 63))).value
		]
	}
}