/**
 * GRAPHICS:RESET_PARTICLE_FX_OVERRIDE
 *
 * 0x9C1E2E25111A648E

 * 
 * Removes the override set up for ptFxToOverride
 * 
 * Resets the effect of SET_PARTICLE_FX_OVERRIDE
 * 
 * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} ptFxToOverride
 */
export function resetParticleFxOverride(ptFxToOverride: string): void {
	const resetParticleFxOverride_result = Citizen.invokeNative<void>('0x9C1E2E25111A648E', ptFxToOverride);
	return resetParticleFxOverride_result;
}