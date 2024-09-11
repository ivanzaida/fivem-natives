import { ModelNames } from '@ivanzaida/structures'

/**
 * VEHICLE:HAS_VEHICLE_ASSET_LOADED
 *
 * 0x16CFE70936BA84C7

 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} vehicleModelHashKey
 * @returns {boolean}  
 */
export function hasVehicleAssetLoaded(vehicleModelHashKey: ModelNames): boolean {
	const hasVehicleAssetLoaded_result = Citizen.invokeNative<boolean>('0x16CFE70936BA84C7', vehicleModelHashKey);
	return hasVehicleAssetLoaded_result;
}