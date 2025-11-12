import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_DOORS_LOCKED
 *
 * 0x4CDD35D0

 * 
 * enum eVehicleLockState
 * {
 * 	VEHICLELOCK_NONE,
 * 	VEHICLELOCK_UNLOCKED,
 * 	VEHICLELOCK_LOCKED,
 * 	VEHICLELOCK_LOCKOUT_PLAYER_ONLY,
 * 	VEHICLELOCK_LOCKED_PLAYER_INSIDE,
 * 	VEHICLELOCK_LOCKED_INITIALLY,
 * 	VEHICLELOCK_FORCE_SHUT_DOORS,
 * 	VEHICLELOCK_LOCKED_BUT_CAN_BE_DAMAGED,
 * 	VEHICLELOCK_LOCKED_BUT_BOOT_UNLOCKED,
 * 	VEHICLELOCK_LOCKED_NO_PASSENGERS,
 * 	VEHICLELOCK_CANNOT_ENTER
 * };
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle whose doors are to be locked.
 * @param {number} doorLockStatus The lock state to apply to the vehicle's doors, see eVehicleLockState.
 */
export function setVehicleDoorsLocked(vehicle: VehicleIndex, doorLockStatus: number): void {
	const setVehicleDoorsLocked_result = Citizen.invokeNative<void>('0x4CDD35D0', vehicle, doorLockStatus);
	return setVehicleDoorsLocked_result;
}