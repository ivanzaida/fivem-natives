import { EAppLaunchFlags } from '../enums/'

export class NetworkAppLaunched {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(8))) {
		if (dataView.byteLength !== 8) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get nFlags(): EAppLaunchFlags {
		return this.dataView.getInt32(0, true) as EAppLaunchFlags
	}
}