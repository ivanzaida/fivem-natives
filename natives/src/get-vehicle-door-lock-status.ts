import { VehicleIndex, ELockState } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_DOOR_LOCK_STATUS
 *
 * 0x38A100E16C95161B

 * enum VehicleLockStatus = {
 *     None = 0,
 *     Unlocked = 1,
 *     Locked = 2,
 *     LockedForPlayer = 3,
 *     StickPlayerInside = 4, -- Doesn't allow players to exit the vehicle with the exit vehicle key.
 *     CanBeBrokenInto = 7, -- Can be broken into the car. If the glass is broken, the value will be set to 1
 *     CanBeBrokenIntoPersist = 8, -- Can be broken into persist
 *     CannotBeTriedToEnter = 10, -- Cannot be tried to enter (Nothing happens when you press the vehicle enter key).
 * }
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {ELockState}  
 */
export function getVehicleDoorLockStatus(vehicle: VehicleIndex): ELockState {
	const getVehicleDoorLockStatus_result = Citizen.invokeNative<ELockState>('0x38A100E16C95161B', vehicle);
	return getVehicleDoorLockStatus_result;
}