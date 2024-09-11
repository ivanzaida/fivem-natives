import { EGETunablesContexts } from '../enums/'

export class TuneablesLancherStruct {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(24))) {
		if (dataView.byteLength !== 24) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get eContext(): EGETunablesContexts {
		return this.dataView.getInt32(0, true) as EGETunablesContexts
	}

	public get eContextSubType(): EGETunablesContexts {
		return this.dataView.getInt32(8, true) as EGETunablesContexts
	}

	public get fillRankTuneables(): boolean {
		return this.dataView.getInt8(16) === 1;
	}
}