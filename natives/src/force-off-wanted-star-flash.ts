/**
 * HUD:FORCE_OFF_WANTED_STAR_FLASH
 *
 * 0xA87B62BE7F8F4476

 * 
 * `
 * Force the wanted star flash off
 * (url:bugstar:2071172)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} shouldForceOff
 */
export function forceOffWantedStarFlash(shouldForceOff: boolean): void {
	const forceOffWantedStarFlash_result = Citizen.invokeNative<void>('0xA87B62BE7F8F4476', shouldForceOff);
	return forceOffWantedStarFlash_result;
}