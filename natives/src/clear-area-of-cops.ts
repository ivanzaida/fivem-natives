/**
 * MISC:CLEAR_AREA_OF_COPS
 *
 * 0x8B0110C1F1D9D177

 * 
 * flags appears to always be 0
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} centreCoorsX
 * @param {number} centreCoorsY
 * @param {number} centreCoorsZ
 * @param {number} radius
 * @param {boolean} broadcast
 */
export function clearAreaOfCops(centreCoorsX: number, centreCoorsY: number, centreCoorsZ: number, radius: number, broadcast: boolean = false): void {
	const clearAreaOfCops_result = Citizen.invokeNative<void>('0x8B0110C1F1D9D177', centreCoorsX, centreCoorsY, centreCoorsZ, radius, broadcast);
	return clearAreaOfCops_result;
}