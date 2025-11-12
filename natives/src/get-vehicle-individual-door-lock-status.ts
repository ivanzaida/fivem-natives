import { VehicleIndex, ELockState } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_INDIVIDUAL_DOOR_LOCK_STATUS
 *
 * 0x405766A9221AFD99

 * 
 * Returns vehicle door lock state previously set with SET_VEHICLE_INDIVIDUAL_DOORS_LOCKED
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} door
 * @returns {ELockState}  
 */
export function getVehicleIndividualDoorLockStatus(vehicle: VehicleIndex, door: number): ELockState {
	const getVehicleIndividualDoorLockStatus_result = Citizen.invokeNative<ELockState>('0x405766A9221AFD99', vehicle, door);
	return getVehicleIndividualDoorLockStatus_result;
}