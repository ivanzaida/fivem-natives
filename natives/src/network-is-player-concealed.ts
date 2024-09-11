import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_IS_PLAYER_CONCEALED
 *
 * 0xF40724C1181481F4

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function networkIsPlayerConcealed(player: PlayerIndex): boolean {
	const networkIsPlayerConcealed_result = Citizen.invokeNative<boolean>('0xF40724C1181481F4', player);
	return networkIsPlayerConcealed_result;
}