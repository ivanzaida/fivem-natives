export enum EHostFlags {
	None,
	HostFlagJobToJob = 8192, // to_game only
	HostFlagAsynchronous = 16384, // transition only
	HostFlagPremium = 32768,
	HostFlagViaTransitionLobby = 65536, // to_game only
}