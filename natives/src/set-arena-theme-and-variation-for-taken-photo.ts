/**
 * GRAPHICS:SET_ARENA_THEME_AND_VARIATION_FOR_TAKEN_PHOTO
 *
 * 0x0F7689113DC97142

 * 
 * Call this command if the photo has been taken while the player is in an Arena in Multiplayer
 * It should be called just before SAVE_HIGH_QUALITY_PHOTO (after the photo has been taken)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} arenaTheme
 * @param {number} arenaVariation
 */
export function setArenaThemeAndVariationForTakenPhoto(arenaTheme: number, arenaVariation: number): void {
	const setArenaThemeAndVariationForTakenPhoto_result = Citizen.invokeNative<void>('0x0F7689113DC97142', arenaTheme, arenaVariation);
	return setArenaThemeAndVariationForTakenPhoto_result;
}