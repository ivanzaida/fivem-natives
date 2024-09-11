/**
 * HUD:SET_BLOCK_WANTED_FLASH
 *
 * 0xAAD5B1BB340D06A2

 * 
 * ------------------------------------------------------------------
 * @param {boolean} blockFlashing
 */
export function setBlockWantedFlash(blockFlashing: boolean): void {
	const setBlockWantedFlash_result = Citizen.invokeNative<void>('0xAAD5B1BB340D06A2', blockFlashing);
	return setBlockWantedFlash_result;
}