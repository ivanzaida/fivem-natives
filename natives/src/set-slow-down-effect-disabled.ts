/**
 * VEHICLE:SET_SLOW_DOWN_EFFECT_DISABLED
 *
 * 0x0A158DF97B623950

 * 
 * Disables the screen effects and sound effects when driving over a slowdown pad.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} invertControls
 */
export function setSlowDownEffectDisabled(invertControls: boolean): void {
	const setSlowDownEffectDisabled_result = Citizen.invokeNative<void>('0x0A158DF97B623950', invertControls);
	return setSlowDownEffectDisabled_result;
}