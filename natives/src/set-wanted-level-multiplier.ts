/**
 * PLAYER:SET_WANTED_LEVEL_MULTIPLIER
 *
 * 0x425BBE19F25A57AB

 * 
 * If you set the wanted multiplier to a low value 0.01 and a cop see you shoot a ped in face you wil still get a wanted level.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} multiplier
 */
export function setWantedLevelMultiplier(multiplier: number): void {
	const setWantedLevelMultiplier_result = Citizen.invokeNative<void>('0x425BBE19F25A57AB', multiplier);
	return setWantedLevelMultiplier_result;
}