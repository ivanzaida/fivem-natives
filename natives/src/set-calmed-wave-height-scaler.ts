/**
 * WATER:SET_CALMED_WAVE_HEIGHT_SCALER
 *
 * 0xBF7C28CF040C67BC

 * 
 * ------------------------------------------------------------------
 * @param {number} scaler
 */
export function setCalmedWaveHeightScaler(scaler: number): void {
	const setCalmedWaveHeightScaler_result = Citizen.invokeNative<void>('0xBF7C28CF040C67BC', scaler);
	return setCalmedWaveHeightScaler_result;
}