import { PedIndex } from '@ivanzaida/structures'

/**
 * AUDIO:SET_PED_RACE_AND_VOICE_GROUP
 *
 * 0xE315F38FDD0139FF

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} pedRace
 * @param {number} pvgHash
 */
export function setPedRaceAndVoiceGroup(ped: PedIndex, pedRace: number, pvgHash: number = 0): void {
	const setPedRaceAndVoiceGroup_result = Citizen.invokeNative<void>('0xE315F38FDD0139FF', ped, pedRace, pvgHash);
	return setPedRaceAndVoiceGroup_result;
}