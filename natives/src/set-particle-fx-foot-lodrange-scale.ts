/**
 * GRAPHICS:SET_PARTICLE_FX_FOOT_LODRANGE_SCALE
 *
 * 0xD07BB7EF3C9F43D8

 * 
 * ------------------------------------------------------------------
 * @param {number} scale
 */
export function setParticleFxFootLodrangeScale(scale: number): void {
	const setParticleFxFootLodrangeScale_result = Citizen.invokeNative<void>('0xD07BB7EF3C9F43D8', scale);
	return setParticleFxFootLodrangeScale_result;
}