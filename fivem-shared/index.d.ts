interface CitizenInterface {
	invokeNative<T = void>(hash: string, ...args: unknown[]): T
	resultAsVector(): unknown
	resultAsObject(): unknown
}

declare const Citizen: CitizenInterface;