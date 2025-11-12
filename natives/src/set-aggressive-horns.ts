/**
 * AUDIO:SET_AGGRESSIVE_HORNS
 *
 * 0x99E0ED93D0644C97

 * 
 * Makes pedestrians sound their horn longer, faster and more agressive when they use their horn.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} enable
 */
export function setAggressiveHorns(enable: boolean): void {
	const setAggressiveHorns_result = Citizen.invokeNative<void>('0x99E0ED93D0644C97', enable);
	return setAggressiveHorns_result;
}