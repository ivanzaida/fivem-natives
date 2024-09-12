/**
 * GRAPHICS:SET_PARTICLE_FX_BLOOD_SCALE
 *
 * 0xEF93301BC8E9BF71

 * 
 * ------------------------------------------------------------------
 * @param {number} scale
 */
export function setParticleFxBloodScale(scale: number): void {
	const setParticleFxBloodScale_result = Citizen.invokeNative<void>('0xEF93301BC8E9BF71', scale);
	return setParticleFxBloodScale_result;
}