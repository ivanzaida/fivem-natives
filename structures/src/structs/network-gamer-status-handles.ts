import { GamerHandle } from './gamer-handle'

export class NetworkGamerStatusHandles {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(10400))) {
		if (dataView.byteLength !== 10400) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get gamers(): GamerHandle[] {
		return [
			new GamerHandle(new DataView(this.dataView.buffer.slice(0, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(104, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(208, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(312, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(416, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(520, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(624, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(728, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(832, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(936, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(1040, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(1144, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(1248, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(1352, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(1456, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(1560, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(1664, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(1768, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(1872, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(1976, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(2080, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(2184, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(2288, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(2392, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(2496, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(2600, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(2704, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(2808, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(2912, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(3016, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(3120, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(3224, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(3328, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(3432, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(3536, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(3640, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(3744, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(3848, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(3952, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(4056, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(4160, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(4264, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(4368, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(4472, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(4576, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(4680, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(4784, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(4888, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(4992, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(5096, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(5200, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(5304, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(5408, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(5512, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(5616, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(5720, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(5824, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(5928, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(6032, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(6136, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(6240, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(6344, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(6448, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(6552, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(6656, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(6760, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(6864, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(6968, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(7072, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(7176, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(7280, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(7384, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(7488, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(7592, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(7696, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(7800, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(7904, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(8008, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(8112, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(8216, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(8320, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(8424, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(8528, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(8632, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(8736, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(8840, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(8944, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(9048, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(9152, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(9256, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(9360, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(9464, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(9568, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(9672, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(9776, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(9880, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(9984, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(10088, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(10192, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(10296, 104)))
		]
	}
}