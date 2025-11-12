import { VehicleIndex, EScDoorList } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_IS_DOOR_VALID
 *
 * 0xB3E28598CA656061

 * 
 * doorId: see SET_VEHICLE_DOOR_SHUT
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EScDoorList} doorNumber
 * @returns {boolean}  
 */
export function getIsDoorValid(vehicle: VehicleIndex, doorNumber: EScDoorList | number): boolean {
	const getIsDoorValid_result = Citizen.invokeNative<boolean>('0xB3E28598CA656061', vehicle, doorNumber);
	return getIsDoorValid_result;
}