import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_SET_ANTAGONISTIC_TO_PLAYER
 *
 * 0x04D8F5CAFCB48E24

 * 
 * Set the localplayer antagonistic to. pedIndex - .
 * If the index is -1 the it only sets the antagonistic flag.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} isAntagonisticTo
 * @param {PlayerIndex} player
 */
export function networkSetAntagonisticToPlayer(isAntagonisticTo: boolean, player: PlayerIndex): void {
	const networkSetAntagonisticToPlayer_result = Citizen.invokeNative<void>('0x04D8F5CAFCB48E24', isAntagonisticTo, player);
	return networkSetAntagonisticToPlayer_result;
}