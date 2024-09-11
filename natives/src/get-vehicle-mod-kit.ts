import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_MOD_KIT
 *
 * 0xA9DFDFED12311CA7

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleModKit(vehicle: VehicleIndex): number {
	const getVehicleModKit_result = Citizen.invokeNative<number>('0xA9DFDFED12311CA7', vehicle);
	return getVehicleModKit_result;
}