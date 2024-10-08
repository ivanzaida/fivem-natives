/**
 * STREAMING:REQUEST_NAMED_PTFX_ASSET
 *
 * 0xEBEE7DC21AB44EC9

 * From the b678d decompiled scripts:
 *  STREAMING::REQUEST_NAMED_PTFX_ASSET("core_snow");
 *  STREAMING::REQUEST_NAMED_PTFX_ASSET("fm_mission_controler");
 *  STREAMING::REQUEST_NAMED_PTFX_ASSET("proj_xmas_firework");
 *  STREAMING::REQUEST_NAMED_PTFX_ASSET("scr_apartment_mp");
 *  STREAMING::REQUEST_NAMED_PTFX_ASSET("scr_biolab_heist");
 *  STREAMING::REQUEST_NAMED_PTFX_ASSET("scr_indep_fireworks");
 *  STREAMING::REQUEST_NAMED_PTFX_ASSET("scr_indep_parachute");
 *  STREAMING::REQUEST_NAMED_PTFX_ASSET("scr_indep_wheelsmoke");
 *  STREAMING::REQUEST_NAMED_PTFX_ASSET("scr_mp_cig_plane");
 *  STREAMING::REQUEST_NAMED_PTFX_ASSET("scr_mp_creator");
 *  STREAMING::REQUEST_NAMED_PTFX_ASSET("scr_mp_tankbattle");
 *  STREAMING::REQUEST_NAMED_PTFX_ASSET("scr_ornate_heist");
 *  STREAMING::REQUEST_NAMED_PTFX_ASSET("scr_prison_break_heist_station");
 * 
 * ------------------------------------------------------------------
 * @param {string} ptFxAssetName
 */
export function requestNamedPtfxAsset(ptFxAssetName: string): void {
	const requestNamedPtfxAsset_result = Citizen.invokeNative<void>('0xEBEE7DC21AB44EC9', ptFxAssetName);
	return requestNamedPtfxAsset_result;
}