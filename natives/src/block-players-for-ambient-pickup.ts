import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:BLOCK_PLAYERS_FOR_AMBIENT_PICKUP
 *
 * 0x4CA2980073803EFF

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} pickup
 * @param {number} playerFlags
 */
export function blockPlayersForAmbientPickup(pickup: ObjectIndex, playerFlags: number): void {
	const blockPlayersForAmbientPickup_result = Citizen.invokeNative<void>('0x4CA2980073803EFF', pickup, playerFlags);
	return blockPlayersForAmbientPickup_result;
}