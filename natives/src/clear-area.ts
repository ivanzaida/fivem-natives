/**
 * MISC:CLEAR_AREA
 *
 * 0x2094BC4B6731BA68

 * 
 * All fires and explosions in the area are also cleared
 * 
 * Example: CLEAR_AREA(0, 0, 0, 30, true, false, false, false);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} centreCoorsX
 * @param {number} centreCoorsY
 * @param {number} centreCoorsZ
 * @param {number} radius
 * @param {boolean} deleteProjectilesFlag
 * @param {boolean} leaveCarGenCars
 * @param {boolean} clearLowPriorityPickupsOnly
 * @param {boolean} broadcast
 */
export function clearArea(centreCoorsX: number, centreCoorsY: number, centreCoorsZ: number, radius: number, deleteProjectilesFlag: boolean, leaveCarGenCars: boolean = false, clearLowPriorityPickupsOnly: boolean = false, broadcast: boolean = false): void {
	const clearArea_result = Citizen.invokeNative<void>('0x2094BC4B6731BA68', centreCoorsX, centreCoorsY, centreCoorsZ, radius, deleteProjectilesFlag, leaveCarGenCars, clearLowPriorityPickupsOnly, broadcast);
	return clearArea_result;
}