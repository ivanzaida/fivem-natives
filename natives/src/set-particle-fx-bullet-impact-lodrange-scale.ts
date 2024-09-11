/**
 * GRAPHICS:SET_PARTICLE_FX_BULLET_IMPACT_LODRANGE_SCALE
 *
 * 0xB16EFD3957DD7FAD

 * 
 * ------------------------------------------------------------------
 * @param {number} scale
 */
export function setParticleFxBulletImpactLodrangeScale(scale: number): void {
	const setParticleFxBulletImpactLodrangeScale_result = Citizen.invokeNative<void>('0xB16EFD3957DD7FAD', scale);
	return setParticleFxBulletImpactLodrangeScale_result;
}