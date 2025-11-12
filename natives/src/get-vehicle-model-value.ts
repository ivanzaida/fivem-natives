import { ModelNames } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_MODEL_VALUE
 *
 * 0x6C6E46A097D62A34

 * 
 * Returns `nMonetaryValue` from handling.meta for specific model.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} vehicleModelHashKey
 * @returns {number}  
 */
export function getVehicleModelValue(vehicleModelHashKey: ModelNames): number {
	const getVehicleModelValue_result = Citizen.invokeNative<number>('0x6C6E46A097D62A34', vehicleModelHashKey);
	return getVehicleModelValue_result;
}