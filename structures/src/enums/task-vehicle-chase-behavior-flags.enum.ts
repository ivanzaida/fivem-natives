export enum ETaskVehicleChaseBehaviorFlags {
	VehicleChaseCantBlock = 1,
	VehicleChaseCantBlockFromPursue,
	VehicleChaseCantPursue = 4,
	VehicleChaseCantRam = 8,
	VehicleChaseCantSpinOut = 16,
	VehicleChaseCantMakeAggressiveMove = 32,
	VehicleChaseCantCruiseInFrontDuringBlock = 64,
	VehicleChaseUseContinuousRam = 128,
	VehicleChaseCantPullAlongside = 256,
	VehicleChaseCantPullAlongsideInfront = 512,
}