/**
 * MISC:SET_CREDITS_ACTIVE
 *
 * 0x810E39899814611D

 * 
 * ------------------------------------------------------------------
 * @param {boolean} active
 */
export function setCreditsActive(active: boolean): void {
	const setCreditsActive_result = Citizen.invokeNative<void>('0x810E39899814611D', active);
	return setCreditsActive_result;
}