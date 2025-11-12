/**
 * GRAPHICS:SET_PARTICLE_FX_OVERRIDE
 *
 * 0xFCD81108C00214FE

 * 
 * All requests to play ptFxToOverride will play ptFxToUseInstead instead
 * 
 * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} ptFxToOverride
 * @param {string} ptFxToUseInstead
 */
export function setParticleFxOverride(ptFxToOverride: string, ptFxToUseInstead: string): void {
	const setParticleFxOverride_result = Citizen.invokeNative<void>('0xFCD81108C00214FE', ptFxToOverride, ptFxToUseInstead);
	return setParticleFxOverride_result;
}