import { NetworkGetGamerStatusResultStruct } from './network-get-gamer-status-result-struct'

export class NetworkGetGamerStatusResultsStruct {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(11200))) {
		if (dataView.byteLength !== 11200) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get aGamers(): NetworkGetGamerStatusResultStruct[] {
		return [
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(0, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(112, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(224, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(336, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(448, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(560, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(672, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(784, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(896, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(1008, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(1120, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(1232, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(1344, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(1456, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(1568, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(1680, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(1792, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(1904, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(2016, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(2128, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(2240, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(2352, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(2464, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(2576, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(2688, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(2800, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(2912, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(3024, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(3136, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(3248, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(3360, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(3472, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(3584, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(3696, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(3808, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(3920, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(4032, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(4144, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(4256, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(4368, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(4480, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(4592, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(4704, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(4816, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(4928, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(5040, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(5152, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(5264, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(5376, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(5488, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(5600, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(5712, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(5824, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(5936, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(6048, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(6160, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(6272, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(6384, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(6496, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(6608, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(6720, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(6832, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(6944, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(7056, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(7168, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(7280, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(7392, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(7504, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(7616, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(7728, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(7840, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(7952, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(8064, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(8176, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(8288, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(8400, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(8512, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(8624, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(8736, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(8848, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(8960, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(9072, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(9184, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(9296, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(9408, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(9520, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(9632, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(9744, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(9856, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(9968, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(10080, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(10192, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(10304, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(10416, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(10528, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(10640, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(10752, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(10864, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(10976, 112))),
			new NetworkGetGamerStatusResultStruct(new DataView(this.dataView.buffer.slice(11088, 112)))
		]
	}
}