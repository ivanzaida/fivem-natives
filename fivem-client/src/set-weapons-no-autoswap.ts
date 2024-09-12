/**
 * CFX:SET_WEAPONS_NO_AUTOSWAP
 *
 * 0x2A7B50E

 * Disables autoswapping to another weapon when the current weapon runs out of ammo.
 * 
 * ------------------------------------------------------------------
 * @param {boolean} state On/Off
 */
export function setWeaponsNoAutoswap(state: boolean): void {
	const setWeaponsNoAutoswap_result = Citizen.invokeNative<void>('0x2A7B50E', state);
	return setWeaponsNoAutoswap_result;
}