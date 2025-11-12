import { ModelNames, VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_RANDOM_VEHICLE_IN_SPHERE
 *
 * 0x66D94742BB3D032F

 * 
 * Gets a random vehicle in a sphere at the specified position, of the specified radius.
 * 
 * x: The X-component of the position of the sphere.
 * y: The Y-component of the position of the sphere.
 * z: The Z-component of the position of the sphere.
 * radius: The radius of the sphere. Max is 9999.9004.
 * modelHash: The vehicle model to limit the selection to. Pass 0 for any model.
 * flags: The bitwise flags that modifies the behaviour of this function.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} centreCoorsX
 * @param {number} centreCoorsY
 * @param {number} centreCoorsZ
 * @param {number} radius
 * @param {ModelNames} vehicleModelHashKey
 * @param {number} searchFlags
 * @returns {VehicleIndex}  
 */
export function getRandomVehicleInSphere(centreCoorsX: number, centreCoorsY: number, centreCoorsZ: number, radius: number, vehicleModelHashKey: ModelNames, searchFlags: number): VehicleIndex {
	const getRandomVehicleInSphere_result = Citizen.invokeNative<VehicleIndex>('0x66D94742BB3D032F', centreCoorsX, centreCoorsY, centreCoorsZ, radius, vehicleModelHashKey, searchFlags);
	return getRandomVehicleInSphere_result;
}