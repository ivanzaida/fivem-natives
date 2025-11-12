import { ModelNames } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_MODEL_ACCELERATION_MAX_MODS
 *
 * 0xD92F8845433585F0

 * 
 * 9.8  thrust if air vehicle, else 0.38 + drive force?
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} vehicleModelHashKey
 * @returns {number}  
 */
export function getVehicleModelAccelerationMaxMods(vehicleModelHashKey: ModelNames): number {
	const getVehicleModelAccelerationMaxMods_result = Citizen.invokeNative<number>('0xD92F8845433585F0', vehicleModelHashKey);
	return getVehicleModelAccelerationMaxMods_result;
}