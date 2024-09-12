import { ModelNames, VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_RANDOM_VEHICLE_FRONT_BUMPER_IN_SPHERE
 *
 * 0xCE29C0EA93335BD3

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
export function getRandomVehicleFrontBumperInSphere(centreCoorsX: number, centreCoorsY: number, centreCoorsZ: number, radius: number, vehicleModelHashKey: ModelNames, searchFlags: number, vehicleToBeIgnored: VehicleIndex = null!): VehicleIndex {
	const getRandomVehicleFrontBumperInSphere_result = Citizen.invokeNative<VehicleIndex>('0xCE29C0EA93335BD3', centreCoorsX, centreCoorsY, centreCoorsZ, radius, vehicleModelHashKey, searchFlags, vehicleToBeIgnored);
	return getRandomVehicleFrontBumperInSphere_result;
}