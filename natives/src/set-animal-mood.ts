import { PedIndex, EAudAnimalMood } from '@ivanzaida/structures'

/**
 * AUDIO:SET_ANIMAL_MOOD
 *
 * 0xB66A5C25E8DCC180

 * 
 * mood can be 0 or 1 (it's not a boolean value!). Effects audio of the animal.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EAudAnimalMood} mood
 */
export function setAnimalMood(ped: PedIndex, mood: EAudAnimalMood | number): void {
	const setAnimalMood_result = Citizen.invokeNative<void>('0xB66A5C25E8DCC180', ped, mood);
	return setAnimalMood_result;
}