/**
 * PHYSICS:SET_IN_STUNT_MODE
 *
 * 0xE9E7D9BE2DE2136A

 * 
 * ------------------------------------------------------------------
 * @param {boolean} inStuntMod
 */
export function setInStuntMode(inStuntMod: boolean): void {
	const setInStuntMode_result = Citizen.invokeNative<void>('0xE9E7D9BE2DE2136A', inStuntMod);
	return setInStuntMode_result;
}