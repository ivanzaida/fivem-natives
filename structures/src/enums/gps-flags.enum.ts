export enum EGpsFlags {
	GpsFlagNone,
	GpsFlagIgnoreOneWay,
	GpsFlagFollowRules,
	GpsFlagAvoidHighway = 4,
	GpsFlagNoRouteShift = 8,
	GpsFlagCustomProximity = 16,
	GpsFlagNoPullPathToRightLane = 32,
	GpsFlagAvoidOffRoad = 64,
	GpsFlagIgnoreDestinationZ = 128,
}