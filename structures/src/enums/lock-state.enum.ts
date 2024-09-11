export enum ELockState {
	VehiclelockNone,
	VehiclelockUnlocked,
	VehiclelockLocked,
	VehiclelockLockoutPlayerOnly,
	VehiclelockLockedPlayerInside,
	VehiclelockLockedInitially,
	VehiclelockForceShutDoors,
	VehiclelockLockedButCanBeDamaged,
	VehiclelockLockedButBootUnlocked,
	VehiclelockLockedNoPassengers,
	VehiclelockCannotEnter,
}