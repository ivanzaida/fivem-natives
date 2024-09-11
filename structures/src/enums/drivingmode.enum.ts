export enum EDrivingmode {
	DfStopForCars = 1,
	DfStopForPeds,
	DfSwerveAroundAllCars = 4,
	DfSteerAroundStationaryCars = 8,
	DfSteerAroundPeds = 16,
	DfSteerAroundObjects = 32,
	DfDontSteerAroundPlayerPed = 64,
	DfStopAtLights = 128,
	DfGoOffRoadWhenAvoiding = 256,
	DfDriveIntoOncomingTraffic = 512,
	DfDriveInReverse = 1024,
	DfUseWanderFallbackInsteadOfStraightLine = 2048, // if pathfinding fails, cruise randomly instead of going on a straight line
	DfAvoidRestrictedAreas = 4096,
	DfPreventBackgroundPathfinding = 8192, // These only work on MISSION_CRUISE
	DfAdjustCruiseSpeedBasedOnRoadSpeed = 16384,
	DfUseShortCutLinks = 262144,
	DfChangeLanesAroundObstructions = 524288,
	DfUseSwitchedOffNodes = 2097152, // cruise tasks ignore this anyway--only used for goto's
	DfPreferNavmeshRoute = 4194304, // if you're going to be primarily driving off road
	DfPlaneTaxiMode = 8388608, // Only works for planes using MISSION_GOTO, will cause them to drive along the ground instead of fly
	DfForceStraightLine = 16777216,
	DfUseStringPullingAtJunctions = 33554432,
	DfAvoidHighways = 536870912,
	DfForceJoinInRoadDirection = 1073741824,
	Stopforcars = 786603, // standard driving mode. stops for cars, peds, and lights, goes around stationary obstructions
	StopforcarsStrict = 262275, // like the above, but doesn't steer around anything in its way--will only wait instead
	Avoidcars = 786469, // default "alerted" driving mode. drives around everything, doesn't obey lights
	AvoidcarsReckless = 786468, // very erratic driving. difference between this and AvoidCars is that it doesn't use the brakes at ALL to help with steering
	Ploughthrough = 262144, // smashes through everything. DF_UseShortCutLinks
	StopforcarsIgnorelights = 786475, // drives normally except for the fact that it ignores lights. DF_StopForCars|DF_SteerAroundStationaryCars|DF_StopForPeds|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions
	AvoidcarsObeylights = 786597, // try to swerve around everything, but stop for lights if necessary. DF_SwerveAroundAllCars|DF_StopAtLights|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions|DF_StopForCars
	AvoidcarsStopforpedsObeylights = 786599, // swerve around cars, be careful around peds, and stop for lights
}