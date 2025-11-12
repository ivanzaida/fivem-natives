/**
 * GRAPHICS:SET_ON_ISLAND_X_FOR_TAKEN_PHOTO
 *
 * 0xF4575C44910A9DF9

 * 
 * Call this command if the photo has been taken while the player is on the Heist Island
 * It should be called just before SAVE_HIGH_QUALITY_PHOTO (after the photo has been taken)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} onIslandX
 */
export function setOnIslandXForTakenPhoto(onIslandX: boolean): void {
	const setOnIslandXForTakenPhoto_result = Citizen.invokeNative<void>('0xF4575C44910A9DF9', onIslandX);
	return setOnIslandXForTakenPhoto_result;
}