import { VehicleIndex } from '@ivanzaida/structures'

/**
 * AUDIO:GET_VEHICLE_DEFAULT_HORN
 *
 * 0xCDF8A102C63845CC

 * 
 * Returns hash of default vehicle horn
 * 
 * Hash is stored in audVehicleAudioEntity
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleDefaultHorn(vehicle: VehicleIndex): number {
	const getVehicleDefaultHorn_result = Citizen.invokeNative<number>('0xCDF8A102C63845CC', vehicle);
	return getVehicleDefaultHorn_result;
}