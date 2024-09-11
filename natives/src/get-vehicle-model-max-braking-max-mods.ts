import { ModelNames } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_MODEL_MAX_BRAKING_MAX_MODS
 *
 * 0xB245818227933E3A

 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} vehicleModelHashKey
 * @returns {number}  
 */
export function getVehicleModelMaxBrakingMaxMods(vehicleModelHashKey: ModelNames): number {
	const getVehicleModelMaxBrakingMaxMods_result = Citizen.invokeNative<number>('0xB245818227933E3A', vehicleModelHashKey);
	return getVehicleModelMaxBrakingMaxMods_result;
}