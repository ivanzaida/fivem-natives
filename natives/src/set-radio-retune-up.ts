/**
 * AUDIO:SET_RADIO_RETUNE_UP
 *
 * 0x7CD8D024151C6CF9

 * 
 * Tune Forward...
 * 
 * 
 * ------------------------------------------------------------------
 */
export function setRadioRetuneUp(): void {
	const setRadioRetuneUp_result = Citizen.invokeNative<void>('0x7CD8D024151C6CF9', );
	return setRadioRetuneUp_result;
}