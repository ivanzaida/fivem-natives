import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:CLEAR_PLAYER_HAS_DAMAGED_AT_LEAST_ONE_NON_ANIMAL_PED
 *
 * 0xD6AD454C9B73DD75

 * 
 * Exclude the animals.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 */
export function clearPlayerHasDamagedAtLeastOneNonAnimalPed(player: PlayerIndex): void {
	const clearPlayerHasDamagedAtLeastOneNonAnimalPed_result = Citizen.invokeNative<void>('0xD6AD454C9B73DD75', player);
	return clearPlayerHasDamagedAtLeastOneNonAnimalPed_result;
}