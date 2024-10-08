export enum EBailReason {
	BailFromScript,
	BailFromRag,
	BailProfileChange,
	BailNewContentInstalled,
	BailSessionFindFailed,
	BailSessionHostFailed,
	BailSessionJoinFailed,
	BailSessionStartFailed,
	BailSessionAttrFailed,
	BailSessionMigrateFailed,
	BailPartyHostFailed,
	BailPartyJoinFailed,
	BailStartTimedOut,
	BailOutOfMemory,
	BailTransitionLaunchFailed,
	BailEndTimedOut,
	BailMatchmakingTimedOut,
	BailCloudFailed,
	BailCompatPackConfigIncorrect,
	BailConsoleBan,
	BailMatchmakingFailed,
	BailOnlinePrivilegeRevoked,
	BailSystemSuspended,
	BailExitGame,
	BailTokenRefreshFailed,
	BailCatalogRefreshFailed,
	BailSessionRefreshFailed,
	BailSessionRestartFailed,
	BailGameServerMaintenance,
	BailGameServerForceBail,
	BailGameServerHeartBail,
	BailGameServerGameVersion,
	BailCatalogversionRefreshFailed,
	BailCatalogBufferTooSmall,
	BailInvalidatedRosTicket,
}