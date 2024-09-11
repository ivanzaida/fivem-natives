/**
 * AUDIO:IS_RADIO_RETUNING
 *
 * 0xC47E3FF56898A28B

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isRadioRetuning(): boolean {
	const isRadioRetuning_result = Citizen.invokeNative<boolean>('0xC47E3FF56898A28B', );
	return isRadioRetuning_result;
}