import { GamerHandle } from './gamer-handle'
import { EGamerStatus } from '../enums/'

export class NetworkGetGamerStatusResultStruct {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(112))) {
		if (dataView.byteLength !== 112) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get gamer(): GamerHandle {
		return new GamerHandle(new DataView(this.dataView.buffer.slice(0, 104)))
	}

	public get nStatus(): EGamerStatus {
		return this.dataView.getInt32(104, true) as EGamerStatus
	}
}