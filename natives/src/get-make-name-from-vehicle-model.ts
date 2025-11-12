import { ModelNames } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_MAKE_NAME_FROM_VEHICLE_MODEL
 *
 * 0xF7AF4F159FF99F97

 * 
 * Will return a vehicle's manufacturer display label.
 * Returns "CARNOTFOUND" if the hash doesn't match a vehicle hash.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} vehicleModelHashKey
 * @returns {string}  
 */
export function getMakeNameFromVehicleModel(vehicleModelHashKey: ModelNames): string {
	const getMakeNameFromVehicleModel_result = Citizen.invokeNative<string>('0xF7AF4F159FF99F97', vehicleModelHashKey);
	return getMakeNameFromVehicleModel_result;
}