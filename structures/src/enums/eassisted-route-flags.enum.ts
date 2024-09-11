export enum EEassistedRouteFlags {
	EassistedDefault,
	EassistedRouteActiveWhenStrafing = 2, // Means that this route is active whilst the player is strafing
	EassistedRouteDisableInForwardsDirection = 4, // This route will not work in the forwards direction (the direction in which it was authored)
	EassistedRouteDisableInReverseDirection = 8, // This route will not work in the reverse direction (opposite to the direction in which it was authored)
}