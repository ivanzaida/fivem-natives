/**
 * CFX:SET_WEAPONS_NO_AIM_BLOCKING
 *
 * 0XDFD8F6DE

 * Disables weapons aim blocking due to environment for local player.For non-player peds [SET_PED_ENABLE_WEAPON_BLOCKING](#_0x97A790315D3831FD) can be used.
 * 
 * ------------------------------------------------------------------
 * @param {boolean} state On/Off
 */
export function setWeaponsNoAimBlocking(state: boolean): void {
	const setWeaponsNoAimBlocking_result = Citizen.invokeNative<void>('0XDFD8F6DE', state);
	return setWeaponsNoAimBlocking_result;
}