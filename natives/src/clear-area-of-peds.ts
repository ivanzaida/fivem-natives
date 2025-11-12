/**
 * MISC:CLEAR_AREA_OF_PEDS
 *
 * 0x55F7AC4B2B875901

 * 
 * Example:       CLEAR_AREA_OF_PEDS(0, 0, 0, 10000, 1);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} centreCoorsX
 * @param {number} centreCoorsY
 * @param {number} centreCoorsZ
 * @param {number} radius
 * @param {boolean} broadcast
 */
export function clearAreaOfPeds(centreCoorsX: number, centreCoorsY: number, centreCoorsZ: number, radius: number, broadcast: boolean = false): void {
	const clearAreaOfPeds_result = Citizen.invokeNative<void>('0x55F7AC4B2B875901', centreCoorsX, centreCoorsY, centreCoorsZ, radius, broadcast);
	return clearAreaOfPeds_result;
}