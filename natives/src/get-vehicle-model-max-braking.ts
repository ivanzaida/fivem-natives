import { ModelNames } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_MODEL_MAX_BRAKING
 *
 * 0xB617B59F8F888D2A

 * 
 * Returns max braking of the specified vehicle model.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} vehicleModelHashKey
 * @returns {number}  
 */
export function getVehicleModelMaxBraking(vehicleModelHashKey: ModelNames): number {
	const getVehicleModelMaxBraking_result = Citizen.invokeNative<number>('0xB617B59F8F888D2A', vehicleModelHashKey);
	return getVehicleModelMaxBraking_result;
}