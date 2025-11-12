/**
 * AUDIO:SET_RADIO_RETUNE_DOWN
 *
 * 0xFB7DD2B09F9CFA1E

 * 
 * Tune Backwards...
 * 
 * 
 * ------------------------------------------------------------------
 */
export function setRadioRetuneDown(): void {
	const setRadioRetuneDown_result = Citizen.invokeNative<void>('0xFB7DD2B09F9CFA1E', );
	return setRadioRetuneDown_result;
}