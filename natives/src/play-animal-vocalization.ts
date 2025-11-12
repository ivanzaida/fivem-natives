import { PedIndex, EAudAnimalType } from '@ivanzaida/structures'

/**
 * AUDIO:PLAY_ANIMAL_VOCALIZATION
 *
 * 0xABFC7C2CD8D89949

 * 
 * Plays sounds from a ped with chop model. For example it used to play bark or sniff sounds. p1 is always 3 or 4294967295 in decompiled scripts. By a quick disassembling I can assume that this arg is unused.
 * This native is works only when you call it on the ped with right model (ac_chop only ?)
 * Speech Name can be: CHOP_SNIFF_SEQ CHOP_WHINE CHOP_LICKS_MOUTH CHOP_PANT bark GROWL SNARL BARK_SEQ
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EAudAnimalType} animalType
 * @param {string} context
 */
export function playAnimalVocalization(ped: PedIndex, animalType: EAudAnimalType | number, context: string): void {
	const playAnimalVocalization_result = Citizen.invokeNative<void>('0xABFC7C2CD8D89949', ped, animalType, context);
	return playAnimalVocalization_result;
}