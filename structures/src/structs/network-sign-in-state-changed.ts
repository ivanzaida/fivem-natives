export class NetworkSignInStateChanged {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(56))) {
		if (dataView.byteLength !== 56) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get index(): number {
		return this.dataView.getInt32(0, true)
	}

	public get isActiveUser(): boolean {
		return this.dataView.getInt8(8) === 1;
	}

	public get wasSignedIn(): boolean {
		return this.dataView.getInt8(16) === 1;
	}

	public get wasOnline(): boolean {
		return this.dataView.getInt8(24) === 1;
	}

	public get isSignedIn(): boolean {
		return this.dataView.getInt8(32) === 1;
	}

	public get isOnline(): boolean {
		return this.dataView.getInt8(40) === 1;
	}

	public get isDuplicateSignIn(): boolean {
		return this.dataView.getInt8(48) === 1;
	}
}