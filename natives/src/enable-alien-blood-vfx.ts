/**
 * GRAPHICS:ENABLE_ALIEN_BLOOD_VFX
 *
 * 0xB8F49F9656A5277B

 * 
 * Creates a motion-blur sort of effect, this native does not seem to work, however by using the `START_SCREEN_EFFECT` native with `DrugsMichaelAliensFight` as the effect parameter, you should be able to get the effect.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} enable
 */
export function enableAlienBloodVfx(enable: boolean): void {
	const enableAlienBloodVfx_result = Citizen.invokeNative<void>('0xB8F49F9656A5277B', enable);
	return enableAlienBloodVfx_result;
}