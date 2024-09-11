import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_CAN_PLAY_MULTIPLAYER_WITH_GAMER
 *
 * 0x5CE1DEFE2CD68587

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamer [Ref]
 * @returns {boolean}  
 */
export function networkCanPlayMultiplayerWithGamer(gamer: GamerHandle /* ptr */): boolean {
	const networkCanPlayMultiplayerWithGamer_result = Citizen.invokeNative<boolean>('0x5CE1DEFE2CD68587', gamer.dataView);
	return networkCanPlayMultiplayerWithGamer_result;
}