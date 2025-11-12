import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_JOIN_TRANSITION
 *
 * 0x0B8EB69DE72AD71E

 * 
 * int handle[76];
 *           NETWORK_HANDLE_FROM_FRIEND(iSelectedPlayer, &handle[0], 13);
 *           Player uVar2 = NETWORK_GET_PLAYER_FROM_GAMER_HANDLE(&handle[0]);
 *           NETWORK_JOIN_TRANSITION(uVar2);
 * nothing doin.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function networkJoinTransition(player: PlayerIndex): boolean {
	const networkJoinTransition_result = Citizen.invokeNative<boolean>('0x0B8EB69DE72AD71E', player);
	return networkJoinTransition_result;
}