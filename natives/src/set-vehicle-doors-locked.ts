import { VehicleIndex, ELockState } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_DOORS_LOCKED
 *
 * 0x0B74F181ADFC39BF

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
 * @param {VehicleIndex} vehicle
 * @param {ELockState} newLockState
 */
export function setVehicleDoorsLocked(vehicle: VehicleIndex, newLockState: ELockState | number): void {
	const setVehicleDoorsLocked_result = Citizen.invokeNative<void>('0x0B74F181ADFC39BF', vehicle, newLockState);
	return setVehicleDoorsLocked_result;
}