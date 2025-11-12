import { ModelNames } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_MODEL_ESTIMATED_MAX_SPEED
 *
 * 0xCF85F9C6CDF5D68E

 * 
 * Returns max speed (without mods) of the specified vehicle model in m/s.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} vehicleModelHashKey
 * @returns {number}  
 */
export function getVehicleModelEstimatedMaxSpeed(vehicleModelHashKey: ModelNames): number {
	const getVehicleModelEstimatedMaxSpeed_result = Citizen.invokeNative<number>('0xCF85F9C6CDF5D68E', vehicleModelHashKey);
	return getVehicleModelEstimatedMaxSpeed_result;
}