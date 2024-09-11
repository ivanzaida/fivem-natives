/**
 * GRAPHICS:SET_NOISEOVERIDE
 *
 * 0xA394F5DE4A5BE6D5

 * 
 * ------------------------------------------------------------------
 * @param {boolean} onOff
 */
export function setNoiseoveride(onOff: boolean): void {
	const setNoiseoveride_result = Citizen.invokeNative<void>('0xA394F5DE4A5BE6D5', onOff);
	return setNoiseoveride_result;
}