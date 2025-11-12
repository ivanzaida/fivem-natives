/**
 * VEHICLE:SET_SPEED_BOOST_EFFECT_DISABLED
 *
 * 0x42B109962C4D43EC

 * 
 * Disables the screen effects and sound effects when driving over a speed boost pad.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} invertControls
 */
export function setSpeedBoostEffectDisabled(invertControls: boolean): void {
	const setSpeedBoostEffectDisabled_result = Citizen.invokeNative<void>('0x42B109962C4D43EC', invertControls);
	return setSpeedBoostEffectDisabled_result;
}