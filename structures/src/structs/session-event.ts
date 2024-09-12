import { ESessionEventType } from '../enums/'
import { GamerHandle } from './gamer-handle'

export class SessionEvent {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(120))) {
		if (dataView.byteLength !== 120) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get nEventId(): ESessionEventType {
		return this.dataView.getInt32(0, true) as ESessionEventType
	}

	public get eventParam(): number {
		return this.dataView.getInt32(8, true)
	}

	public get gamer(): GamerHandle {
		return new GamerHandle(new DataView(this.dataView.buffer.slice(16, 104)))
	}
}