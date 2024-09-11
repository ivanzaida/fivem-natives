/**
 * CFX:SET_WEAPONS_NO_AUTORELOAD
 *
 * 0X311150E5

 * Disables the game's built-in auto-reloading.
 * 
 * ------------------------------------------------------------------
 * @param {boolean} state On/Off
 */
export function setWeaponsNoAutoreload(state: boolean): void {
	const setWeaponsNoAutoreload_result = Citizen.invokeNative<void>('0X311150E5', state);
	return setWeaponsNoAutoreload_result;
}