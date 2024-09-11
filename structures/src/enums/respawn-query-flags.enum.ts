export enum ERespawnQueryFlags {
	RespawnQueryFlagDefault,
	RespawnQueryFlagIgnoreTargetHeading = 2, // instructs query to ignore the target position; returned headings will be in any direction, but facing away from walls if possible
	RespawnQueryFlagPreferCloseToSpawnOrigin = 4, // prefer positions which are closer to the origin position passed in
	RespawnQueryFlagMaySpawnInInterior = 8, // allow spawn points to be chosen in interiors
	RespawnQueryFlagMaySpawnInExterior = 16, // allow spawn points to be chosen in exterior (main map) locations
	RespawnQueryFlagPreferWideFov = 32, // prefer spawn points with wider fovs
	RespawnQueryFlagPreferTeamBunching = 64, // prefer spawn points closer to friendly bunches and farther away from enemy bunches
	RespawnQueryFlagPreferEnemyPlayersFarther = 128, // prefer spawn points away from enemy players
	RespawnQueryFlagPreferFriendlyPlayersCloser = 256, // prefer spawn points closer to friendly players (but not too close)
	RespawnQueryFlagPreferEnemyAiFarther = 512, // prefer spawn points away from enemy ai
	RespawnQueryFlagPreferFriendlyAiCloser = 1024, // prefer spawn points closer to friendly ai (but not too close)
	RespawnQueryFlagPreferRandomness = 2048, // adds a bit of randomness
}