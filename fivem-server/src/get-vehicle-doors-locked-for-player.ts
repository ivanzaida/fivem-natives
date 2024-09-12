import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_DOORS_LOCKED_FOR_PLAYER
 *
 * 0x1DC50247

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function getVehicleDoorsLockedForPlayer(vehicle: VehicleIndex): boolean {
	const getVehicleDoorsLockedForPlayer_result = Citizen.invokeNative<boolean>('0x1DC50247', vehicle);
	return getVehicleDoorsLockedForPlayer_result;
}