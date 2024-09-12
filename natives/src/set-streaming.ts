/**
 * STREAMING:SET_STREAMING
 *
 * 0x461E44FC144D65C1

 * 
 * ------------------------------------------------------------------
 * @param {boolean} onOff
 */
export function setStreaming(onOff: boolean): void {
	const setStreaming_result = Citizen.invokeNative<void>('0x461E44FC144D65C1', onOff);
	return setStreaming_result;
}