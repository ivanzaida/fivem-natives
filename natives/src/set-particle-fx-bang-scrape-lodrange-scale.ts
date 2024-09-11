/**
 * GRAPHICS:SET_PARTICLE_FX_BANG_SCRAPE_LODRANGE_SCALE
 *
 * 0xB260FC482D6B50B9

 * 
 * ------------------------------------------------------------------
 * @param {number} scale
 */
export function setParticleFxBangScrapeLodrangeScale(scale: number): void {
	const setParticleFxBangScrapeLodrangeScale_result = Citizen.invokeNative<void>('0xB260FC482D6B50B9', scale);
	return setParticleFxBangScrapeLodrangeScale_result;
}