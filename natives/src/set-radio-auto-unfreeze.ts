/**
 * AUDIO:SET_RADIO_AUTO_UNFREEZE
 *
 * 0xF51244E6BCE779C5

 * 
 * PARAM NOTES
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} enable
 */
export function setRadioAutoUnfreeze(enable: boolean): void {
	const setRadioAutoUnfreeze_result = Citizen.invokeNative<void>('0xF51244E6BCE779C5', enable);
	return setRadioAutoUnfreeze_result;
}