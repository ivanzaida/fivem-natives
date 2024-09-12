import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_CAN_GAMER_PLAY_MULTIPLAYER_WITH_ME
 *
 * 0x212E8A037E68E81C

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamer [Ref]
 * @returns {boolean}  
 */
export function networkCanGamerPlayMultiplayerWithMe(gamer: GamerHandle /* ptr */): boolean {
	const networkCanGamerPlayMultiplayerWithMe_result = Citizen.invokeNative<boolean>('0x212E8A037E68E81C', gamer.dataView);
	return networkCanGamerPlayMultiplayerWithMe_result;
}