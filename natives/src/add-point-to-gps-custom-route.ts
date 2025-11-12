/**
 * HUD:ADD_POINT_TO_GPS_CUSTOM_ROUTE
 *
 * 0x1F3227D731DA86BA

 * 
 * Add a route point to the custom GPS route
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 */
export function addPointToGpsCustomRoute(coorsX: number, coorsY: number, coorsZ: number): void {
	const addPointToGpsCustomRoute_result = Citizen.invokeNative<void>('0x1F3227D731DA86BA', coorsX, coorsY, coorsZ);
	return addPointToGpsCustomRoute_result;
}