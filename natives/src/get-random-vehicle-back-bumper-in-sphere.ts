import { ModelNames, VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_RANDOM_VEHICLE_BACK_BUMPER_IN_SPHERE
 *
 * 0x1C4D3AE530899DF2

 * 
 * ------------------------------------------------------------------
 * @param {number} centreCoorsX
 * @param {number} centreCoorsY
 * @param {number} centreCoorsZ
 * @param {number} radius
 * @param {ModelNames} vehicleModelHashKey
 * @param {number} searchFlags
 * @param {VehicleIndex} vehicleToBeIgnored
 * @returns {VehicleIndex}  
 */
export function getRandomVehicleBackBumperInSphere(centreCoorsX: number, centreCoorsY: number, centreCoorsZ: number, radius: number, vehicleModelHashKey: ModelNames, searchFlags: number, vehicleToBeIgnored: VehicleIndex = null!): VehicleIndex {
	const getRandomVehicleBackBumperInSphere_result = Citizen.invokeNative<VehicleIndex>('0x1C4D3AE530899DF2', centreCoorsX, centreCoorsY, centreCoorsZ, radius, vehicleModelHashKey, searchFlags, vehicleToBeIgnored);
	return getRandomVehicleBackBumperInSphere_result;
}