import { ModelNames } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_FLYING_VEHICLE_MODEL_AGILITY
 *
 * 0x4978F96428784EA4

 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} vehicleModelHashKey
 * @returns {number}  
 */
export function getFlyingVehicleModelAgility(vehicleModelHashKey: ModelNames): number {
	const getFlyingVehicleModelAgility_result = Citizen.invokeNative<number>('0x4978F96428784EA4', vehicleModelHashKey);
	return getFlyingVehicleModelAgility_result;
}