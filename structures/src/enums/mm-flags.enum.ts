export enum EMmFlags {
	None,
	MmFlagAsynchronous,
	MmFlagQuickmatch,
	MmFlagAllowBlacklisted = 4,
	MmFlagDisableAnyJobQueries = 64, // jobs only
	MmFlagDisableInProgressQueries = 128, // jobs only
	MmFlagRockstarContentOnly = 512, // jobs only
	MmFlagUserContentOnly = 1024, // jobs only
	MmFlagIsBoss = 2048,
	MmFlagJobToJob = 4096, // to_game only
	MmFlagBailFromLaunchedJobs = 16384, // jobs only
	MmFlagOnlyInProgress = 32768, // jobs only
	MmFlagToGameViaTransition = 65536, // to_game only
	MmFlagExpandedIntroFlow = 131072,
}