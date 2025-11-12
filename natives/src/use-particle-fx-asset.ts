/**
 * GRAPHICS:USE_PARTICLE_FX_ASSET
 *
 * 0xD03F4780B97A39AE

 * 
 * This must be called directly before every START_PARTICLE_FX_ command that needs it
 * 
 * From the b678d decompiled scripts:
 * 
 *  GRAPHICS::USE_PARTICLE_FX_ASSET("FM_Mission_Controler");
 *  GRAPHICS::USE_PARTICLE_FX_ASSET("scr_apartment_mp");
 *  GRAPHICS::USE_PARTICLE_FX_ASSET("scr_indep_fireworks");
 *  GRAPHICS::USE_PARTICLE_FX_ASSET("scr_mp_cig_plane");
 *  GRAPHICS::USE_PARTICLE_FX_ASSET("scr_mp_creator");
 *  GRAPHICS::USE_PARTICLE_FX_ASSET("scr_ornate_heist");
 *  GRAPHICS::USE_PARTICLE_FX_ASSET("scr_prison_break_heist_station");
 * 
 * Full list of particle effect dictionaries and effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/particleEffectsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} ptFxAssetName
 */
export function useParticleFxAsset(ptFxAssetName: string): void {
	const useParticleFxAsset_result = Citizen.invokeNative<void>('0xD03F4780B97A39AE', ptFxAssetName);
	return useParticleFxAsset_result;
}