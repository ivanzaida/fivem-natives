/**
 * HUD:SET_TEXT_PROPORTIONAL
 *
 * 0xEA62FB8CA7210CF3

 * 
 * This native does absolutely nothing, just a nullsub
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} textProportionalFlag
 */
export function setTextProportional(textProportionalFlag: boolean): void {
	const setTextProportional_result = Citizen.invokeNative<void>('0xEA62FB8CA7210CF3', textProportionalFlag);
	return setTextProportional_result;
}