/**
 * VEHICLE:SET_DISABLE_RANDOM_TRAINS_THIS_FRAME
 *
 * 0x3F4A190062FF9E09

 * 
 * ------------------------------------------------------------------
 * @param {boolean} val
 */
export function setDisableRandomTrainsThisFrame(val: boolean): void {
	const setDisableRandomTrainsThisFrame_result = Citizen.invokeNative<void>('0x3F4A190062FF9E09', val);
	return setDisableRandomTrainsThisFrame_result;
}