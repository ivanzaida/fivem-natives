import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:IS_VEHICLE_PREVIOUSLY_OWNED_BY_PLAYER
 *
 * 0xF849ED67

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isVehiclePreviouslyOwnedByPlayer(vehicle: VehicleIndex): boolean {
	const isVehiclePreviouslyOwnedByPlayer_result = Citizen.invokeNative<boolean>('0xF849ED67', vehicle);
	return isVehiclePreviouslyOwnedByPlayer_result;
}