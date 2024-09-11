import { GamerHandle } from './gamer-handle'

export class FollowInviteEvent {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(104))) {
		if (dataView.byteLength !== 104) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get inviter(): GamerHandle {
		return new GamerHandle(new DataView(this.dataView.buffer.slice(0, 104)))
	}
}