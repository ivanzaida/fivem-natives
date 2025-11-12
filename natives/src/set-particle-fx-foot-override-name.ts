/**
 * GRAPHICS:SET_PARTICLE_FX_FOOT_OVERRIDE_NAME
 *
 * 0x8E22BC7CC1BBF7E4

 * 
 * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} overridePtFxName
 */
export function setParticleFxFootOverrideName(overridePtFxName: string): void {
	const setParticleFxFootOverrideName_result = Citizen.invokeNative<void>('0x8E22BC7CC1BBF7E4', overridePtFxName);
	return setParticleFxFootOverrideName_result;
}