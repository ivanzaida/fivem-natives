/**
 * AUDIO:IS_RADIO_FADED_OUT
 *
 * 0x93D3C066DE3C5879

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isRadioFadedOut(): boolean {
	const isRadioFadedOut_result = Citizen.invokeNative<boolean>('0x93D3C066DE3C5879', );
	return isRadioFadedOut_result;
}