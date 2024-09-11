export enum EEwaypointFollowFlags {
	EwaypointDefault,
	EwaypointTurnToFaceWaypointHeadingAtEnd, // Turns the ped to face the heading of the final waypoint when the task ends
	EwaypointNavmeshToInitialWaypoint, // If necessary, uses the navmesh to get to the initial waypoint
	EwaypointNavmeshBackToWaypointIfLeftRoute = 4, // If the ped has left the route, will use the navmesh to return to last position
	EwaypointStartFromClosestPoint = 8, // Will start (or resume if interrupted) the waypoint playback from the closest segment to the ped
	EwaypointVehiclesUseAiSlowdown = 16, // Vehicle AI will calculate speeds for turns instead of using the recorded values
	EwaypointDoNotRespondToCollisionEvents = 32, // Ignore all collisions with other peds, players, objects and vehicles
	EwaypointDoNotSlowForCorners = 64, // Ped will not slow for corners
	EwaypointStartTaskInitiallyAiming = 128, // Ped starts the task aiming at a position directly ahead of him. (avoids the ped lowering weapon briefly when first given this task)
	EwaypointStartTaskExactstop = 256, // Ped will to an exact stop at the end of the route
	EwaypointUseTighterTurnSettings = 512, // Ped will be able to turn faster than normal, to help negotiate awkward spaces
	EwaypointAllowSteeringAroundPeds = 1024, // Ped will perform ped/ped avoidance (unless playback is set as non-interruptible)
	EwaypointSuppressExactstop = 2048, // Suppress exact stops
	EwaypointSlowMoreForCorners = 4096, // Dials up the amount which peds can slow to take corners - helps fix issues with peds running into doorframes, etc
}