import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_ENVEFF_SCALE
 *
 * 0xD1DBD3830272ECAA

 * 
 * The result is a value from 0-1, where 0 is fresh paint.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleEnveffScale(vehicle: VehicleIndex): number {
	const getVehicleEnveffScale_result = Citizen.invokeNative<number>('0xD1DBD3830272ECAA', vehicle);
	return getVehicleEnveffScale_result;
}