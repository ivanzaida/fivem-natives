import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_PLAYER_TUTORIAL_SESSION_INSTANCE
 *
 * 0x69617275A0B1B72D

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {number}  
 */
export function networkGetPlayerTutorialSessionInstance(player: PlayerIndex): number {
	const networkGetPlayerTutorialSessionInstance_result = Citizen.invokeNative<number>('0x69617275A0B1B72D', player);
	return networkGetPlayerTutorialSessionInstance_result;
}