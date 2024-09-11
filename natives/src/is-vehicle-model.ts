import { VehicleIndex, ModelNames } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_VEHICLE_MODEL
 *
 * 0x2E6A27037F1DC473

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {ModelNames} modelHashKey
 * @returns {boolean}  
 */
export function isVehicleModel(vehicle: VehicleIndex, modelHashKey: ModelNames): boolean {
	const isVehicleModel_result = Citizen.invokeNative<boolean>('0x2E6A27037F1DC473', vehicle, modelHashKey);
	return isVehicleModel_result;
}