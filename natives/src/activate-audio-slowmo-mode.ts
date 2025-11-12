/**
 * AUDIO:ACTIVATE_AUDIO_SLOWMO_MODE
 *
 * 0xF010888FF9A380E6

 * 
 * mode can be any of these:
 * SLOWMO_T1_TRAILER_SMASH
 * SLOWMO_T1_RAYFIRE_EXPLOSION
 * SLOWMO_PROLOGUE_VAULT
 * NIGEL_02_SLOWMO_SETTING
 * JSH_EXIT_TUNNEL_SLOWMO
 * SLOWMO_BIG_SCORE_JUMP
 * SLOWMO_FIB4_TRUCK_SMASH
 * SLOWMO_EXTREME_04
 * SLOW_MO_METH_HOUSE_RAYFIRE
 * BARRY_02_SLOWMO
 * BARRY_01_SLOWMO
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} mode
 */
export function activateAudioSlowmoMode(mode: string): void {
	const activateAudioSlowmoMode_result = Citizen.invokeNative<void>('0xF010888FF9A380E6', mode);
	return activateAudioSlowmoMode_result;
}