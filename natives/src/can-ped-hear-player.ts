import { PlayerIndex, PedIndex } from '@ivanzaida/structures'

/**
 * PLAYER:CAN_PED_HEAR_PLAYER
 *
 * 0xC1204DBD7B8A643E

 * 
 * Returns if a player's stealth noise value is smaller than the distance to the given ped.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function canPedHearPlayer(player: PlayerIndex, ped: PedIndex): boolean {
	const canPedHearPlayer_result = Citizen.invokeNative<boolean>('0xC1204DBD7B8A643E', player, ped);
	return canPedHearPlayer_result;
}