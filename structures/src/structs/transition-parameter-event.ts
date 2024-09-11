import { GamerHandle } from './gamer-handle'
import { ParameterData } from './parameter-data'

export class TransitionParameterEvent {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(272))) {
		if (dataView.byteLength !== 272) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get gamer(): GamerHandle {
		return new GamerHandle(new DataView(this.dataView.buffer.slice(0, 104)))
	}

	public get numberParams(): number {
		return this.dataView.getInt32(104, true)
	}

	public get nParameterData(): ParameterData[] {
		return [
			new ParameterData(new DataView(this.dataView.buffer.slice(112, 16))),
			new ParameterData(new DataView(this.dataView.buffer.slice(128, 16))),
			new ParameterData(new DataView(this.dataView.buffer.slice(144, 16))),
			new ParameterData(new DataView(this.dataView.buffer.slice(160, 16))),
			new ParameterData(new DataView(this.dataView.buffer.slice(176, 16))),
			new ParameterData(new DataView(this.dataView.buffer.slice(192, 16))),
			new ParameterData(new DataView(this.dataView.buffer.slice(208, 16))),
			new ParameterData(new DataView(this.dataView.buffer.slice(224, 16))),
			new ParameterData(new DataView(this.dataView.buffer.slice(240, 16))),
			new ParameterData(new DataView(this.dataView.buffer.slice(256, 16)))
		]
	}
}