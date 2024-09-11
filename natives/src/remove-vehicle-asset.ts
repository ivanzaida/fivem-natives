import { ModelNames } from '@ivanzaida/structures'

/**
 * VEHICLE:REMOVE_VEHICLE_ASSET
 *
 * 0xCE41CD0179F8640B

 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} vehicleModelHashKey
 */
export function removeVehicleAsset(vehicleModelHashKey: ModelNames): void {
	const removeVehicleAsset_result = Citizen.invokeNative<void>('0xCE41CD0179F8640B', vehicleModelHashKey);
	return removeVehicleAsset_result;
}