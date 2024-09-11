/**
 * GRAPHICS:SET_PARTICLE_FX_SLIPSTREAM_LODRANGE_SCALE
 *
 * 0x3E9F81F9260D4C72

 * 
 * ------------------------------------------------------------------
 * @param {number} scale
 */
export function setParticleFxSlipstreamLodrangeScale(scale: number): void {
	const setParticleFxSlipstreamLodrangeScale_result = Citizen.invokeNative<void>('0x3E9F81F9260D4C72', scale);
	return setParticleFxSlipstreamLodrangeScale_result;
}