import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_IS_PLAYER_IN_MP_CUTSCENE
 *
 * 0xD65DFBCD23E76428

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function networkIsPlayerInMpCutscene(player: PlayerIndex): boolean {
	const networkIsPlayerInMpCutscene_result = Citizen.invokeNative<boolean>('0xD65DFBCD23E76428', player);
	return networkIsPlayerInMpCutscene_result;
}