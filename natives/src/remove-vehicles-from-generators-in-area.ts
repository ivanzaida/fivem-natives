/**
 * VEHICLE:REMOVE_VEHICLES_FROM_GENERATORS_IN_AREA
 *
 * 0xC4BCE90F7242F354

 * 
 * ------------------------------------------------------------------
 * @param {number} minCoorsX
 * @param {number} minCoorsY
 * @param {number} minCoorsZ
 * @param {number} maxCoorsX
 * @param {number} maxCoorsY
 * @param {number} maxCoorsZ
 * @param {boolean} isNetworked
 */
export function removeVehiclesFromGeneratorsInArea(minCoorsX: number, minCoorsY: number, minCoorsZ: number, maxCoorsX: number, maxCoorsY: number, maxCoorsZ: number, isNetworked: boolean = false): void {
	const removeVehiclesFromGeneratorsInArea_result = Citizen.invokeNative<void>('0xC4BCE90F7242F354', minCoorsX, minCoorsY, minCoorsZ, maxCoorsX, maxCoorsY, maxCoorsZ, isNetworked);
	return removeVehiclesFromGeneratorsInArea_result;
}