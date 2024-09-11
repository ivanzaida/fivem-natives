import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_LIGHT_MULTIPLIER
 *
 * 0X7E6E219C

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleLightMultiplier(vehicle: VehicleIndex): number {
	const getVehicleLightMultiplier_result = Citizen.invokeNative<number>('0X7E6E219C', vehicle);
	return getVehicleLightMultiplier_result;
}