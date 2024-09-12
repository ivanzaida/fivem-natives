/**
 * GRAPHICS:SET_PARTICLE_FX_BULLET_IMPACT_SCALE
 *
 * 0x036C12D7B5744CAF

 * 
 * ------------------------------------------------------------------
 * @param {number} scale
 */
export function setParticleFxBulletImpactScale(scale: number): void {
	const setParticleFxBulletImpactScale_result = Citizen.invokeNative<void>('0x036C12D7B5744CAF', scale);
	return setParticleFxBulletImpactScale_result;
}