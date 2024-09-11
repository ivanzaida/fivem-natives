import { ECheatEventTypes } from '../enums/'

export class CheatEvent {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(8))) {
		if (dataView.byteLength !== 8) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get cheatType(): ECheatEventTypes {
		return this.dataView.getInt32(0, true) as ECheatEventTypes
	}
}