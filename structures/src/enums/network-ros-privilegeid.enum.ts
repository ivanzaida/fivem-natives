export enum ENetworkRosPrivilegeid {
	RlrosPrivilegeidNone, // Unused
	RlrosPrivilegeidCreateTicket, // Can create ROS tickets
	RlrosPrivilegeidProfileStatsWrite, // Can write profile stats
	RlrosPrivilegeidMultiplayer, // Can participate in MP sessions (currently not used)
	RlrosPrivilegeidLeaderboardWrite, // Can write to leaderboards (currently not used)
	RlrosPrivilegeidCloudStorageRead, // Can write to cloud storage
	RlrosPrivilegeidCloudStorageWrite, // Can read from cloud storage
	RlrosPrivilegeidBanned, // Denies all other privileges except CREATE_TICKET
	RlrosPrivilegeidClan, // Can use clan functions
	RlrosPrivilegeidPrivateMessaging, // Can use private messaging system
	RlrosPrivilegeidSocialClub, // Can login to SC site, and TBD other functionality
	RlrosPrivilegeidPresenceWrite, // Can update presence
	RlrosPrivilegeidDeveloper, // If true, user is considered a developer
	RlrosPrivilegeidHttpRequestLogging, // If true, user's HTTP request log to SCS gameservices and cloud is logged
	RlrosPrivilegeidUgcwrite, // If true, allows writing UGC
	RlrosPrivilegeidPurchasevc, // If true, allows purchasing virtual currency
	RlrosPrivilegeidTransfervc, // If true, allows transferring virtual currency
	RlrosPrivilegeidCanbet, // If true, player can place bets
	RlrosPrivilegeidCreators, // If true, player can access the creators
	RlrosPrivilegeidCloudTunables, // If true, player can download the cloud tunables
	RlrosPrivilegeidCheaterPool, // If true, player is in the cheater pool
	RlrosPrivilegeidCommentwrite, // If true, user can create comments
	RlrosPrivilegeidCanuselottery, // If true, player can buy lottery tickets
	RlrosPrivilegeidAllowMemberRedirect, // If true, player should run member space re-directs
	RlrosPrivilegeidPlayedLastGen, // If true, grant played last gen privilege
	RlrosPrivilegeidUnlockSpecialEdition, // If true, grant special edition content
	RlrosNumPrivilegeid,
}