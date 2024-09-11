import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_IS_PLAYER_FADING
 *
 * 0xCF580EB76CEC15FD

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function networkIsPlayerFading(player: PlayerIndex): boolean {
	const networkIsPlayerFading_result = Citizen.invokeNative<boolean>('0xCF580EB76CEC15FD', player);
	return networkIsPlayerFading_result;
}