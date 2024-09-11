/**
 * AUDIO:SET_GLOBAL_RADIO_SIGNAL_LEVEL
 *
 * 0x5F3ABB7227973CB8

 * 
 * ------------------------------------------------------------------
 * @param {number} signalLevel
 */
export function setGlobalRadioSignalLevel(signalLevel: number): void {
	const setGlobalRadioSignalLevel_result = Citizen.invokeNative<void>('0x5F3ABB7227973CB8', signalLevel);
	return setGlobalRadioSignalLevel_result;
}