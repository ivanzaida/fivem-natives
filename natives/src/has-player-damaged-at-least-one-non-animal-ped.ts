import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:HAS_PLAYER_DAMAGED_AT_LEAST_ONE_NON_ANIMAL_PED
 *
 * 0xEFC75C3D53F60CB1

 * 
 * Exclude the animals.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function hasPlayerDamagedAtLeastOneNonAnimalPed(player: PlayerIndex): boolean {
	const hasPlayerDamagedAtLeastOneNonAnimalPed_result = Citizen.invokeNative<boolean>('0xEFC75C3D53F60CB1', player);
	return hasPlayerDamagedAtLeastOneNonAnimalPed_result;
}