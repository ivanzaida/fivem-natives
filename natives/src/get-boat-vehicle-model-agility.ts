import { ModelNames } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_BOAT_VEHICLE_MODEL_AGILITY
 *
 * 0x25C4079E4C1D71E8

 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} vehicleModelHashKey
 * @returns {number}  
 */
export function getBoatVehicleModelAgility(vehicleModelHashKey: ModelNames): number {
	const getBoatVehicleModelAgility_result = Citizen.invokeNative<number>('0x25C4079E4C1D71E8', vehicleModelHashKey);
	return getBoatVehicleModelAgility_result;
}