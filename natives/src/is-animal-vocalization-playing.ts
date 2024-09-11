import { PedIndex } from '@ivanzaida/structures'

/**
 * AUDIO:IS_ANIMAL_VOCALIZATION_PLAYING
 *
 * 0xA6A0FE99C58BF725

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isAnimalVocalizationPlaying(ped: PedIndex): boolean {
	const isAnimalVocalizationPlaying_result = Citizen.invokeNative<boolean>('0xA6A0FE99C58BF725', ped);
	return isAnimalVocalizationPlaying_result;
}