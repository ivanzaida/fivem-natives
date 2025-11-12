import { PedIndex } from '@ivanzaida/structures'

/**
 * PLAYER:PLAYER_PED_ID
 *
 * 0x4A8C381C258A124D

 * 
 * Returns current player ped
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {PedIndex}  
 */
export function playerPedId(): PedIndex {
	const playerPedId_result = Citizen.invokeNative<PedIndex>('0x4A8C381C258A124D', );
	return playerPedId_result;
}