export enum ETaskGoToCoordAnyMeansFlags {
	TgcamDefault,
	TgcamIgnoreVehicleHealth, // Ignore the health of the vehicle (default behaviour is to not use any vehicle with less than 600 health)
	TgcamConsiderAllNearbyVehicles, // Considers all nearby vehicles for suitability (default behaviour is to consider only the vehicle closest to the ped)
	TgcamProperIsDriveableCheck = 4, // Performs the same tests as is done in IS_VEHICLE_DRIVEABLE (default behaviour is to just check the vehicle's health)
	TgcamRemainInVehicleAtDestination = 8, // Instructs the ped to remain in the vehicle at the end, so that multiple tasks can be chained together (see url
	TgcamNeverAbandonVehicle = 16, // Ped will never abandon the vehicle it is in (see url
	TgcamNeverAbandonVehicleIfMoving = 32, // Ped will never abandon the vehicle it is in if vehicle is moving (see url
	TgcamUseAiTargetingForThreats = 64, // Peds will use the targeting system for threats and register any threats they can attack (rather than just using the closest targetable ped)
}