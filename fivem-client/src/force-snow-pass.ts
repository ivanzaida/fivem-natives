/**
 * CFX:FORCE_SNOW_PASS
 *
 * 0xE6E16170

 * Forces the game snow pass to render.
 * 
 * ------------------------------------------------------------------
 * @param {boolean} enabled Whether or not to force rendering to use a snow pass.
 */
export function forceSnowPass(enabled: boolean): void {
	const forceSnowPass_result = Citizen.invokeNative<void>('0xE6E16170', enabled);
	return forceSnowPass_result;
}