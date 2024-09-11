/**
 * NETWORK:SET_INVERT_GHOSTING
 *
 * 0xC21CAB69B42AB890

 * 
 * ------------------------------------------------------------------
 * @param {boolean} set
 */
export function setInvertGhosting(set: boolean): void {
	const setInvertGhosting_result = Citizen.invokeNative<void>('0xC21CAB69B42AB890', set);
	return setInvertGhosting_result;
}