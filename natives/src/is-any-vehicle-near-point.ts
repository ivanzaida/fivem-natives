/**
 * VEHICLE:IS_ANY_VEHICLE_NEAR_POINT
 *
 * 0x913602ADD2D86A7A

 * 
 * ------------------------------------------------------------------
 * @param {number} pointX
 * @param {number} pointY
 * @param {number} pointZ
 * @param {number} radius
 * @returns {boolean}  
 */
export function isAnyVehicleNearPoint(pointX: number, pointY: number, pointZ: number, radius: number): boolean {
	const isAnyVehicleNearPoint_result = Citizen.invokeNative<boolean>('0x913602ADD2D86A7A', pointX, pointY, pointZ, radius);
	return isAnyVehicleNearPoint_result;
}