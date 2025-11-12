import { ModelNames } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_MODEL_MAX_TRACTION
 *
 * 0x859EED8E8B695F08

 * 
 * Returns max traction of the specified vehicle model.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} vehicleModelHashKey
 * @returns {number}  
 */
export function getVehicleModelMaxTraction(vehicleModelHashKey: ModelNames): number {
	const getVehicleModelMaxTraction_result = Citizen.invokeNative<number>('0x859EED8E8B695F08', vehicleModelHashKey);
	return getVehicleModelMaxTraction_result;
}