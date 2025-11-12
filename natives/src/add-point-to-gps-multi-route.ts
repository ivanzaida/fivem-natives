/**
 * HUD:ADD_POINT_TO_GPS_MULTI_ROUTE
 *
 * 0xAD5E8940E3832571

 * 
 * Adds a point to a multi-route
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 */
export function addPointToGpsMultiRoute(coorsX: number, coorsY: number, coorsZ: number): void {
	const addPointToGpsMultiRoute_result = Citizen.invokeNative<void>('0xAD5E8940E3832571', coorsX, coorsY, coorsZ);
	return addPointToGpsMultiRoute_result;
}