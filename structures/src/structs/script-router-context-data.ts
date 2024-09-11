export class ScriptRouterContextData {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(0))) {
		if (dataView.byteLength !== undefined) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}
}