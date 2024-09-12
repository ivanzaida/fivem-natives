import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:IS_VEHICLE_WANTED
 *
 * 0xA7DAF7C

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isVehicleWanted(vehicle: VehicleIndex): boolean {
	const isVehicleWanted_result = Citizen.invokeNative<boolean>('0xA7DAF7C', vehicle);
	return isVehicleWanted_result;
}