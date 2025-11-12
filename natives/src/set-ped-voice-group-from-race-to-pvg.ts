import { PedIndex } from '@ivanzaida/structures'

/**
 * AUDIO:SET_PED_VOICE_GROUP_FROM_RACE_TO_PVG
 *
 * 0x4349438F7A83A186

 * 
 * Dat151RelType == 29
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} raceToPVGHash
 */
export function setPedVoiceGroupFromRaceToPvg(ped: PedIndex, raceToPVGHash: number): void {
	const setPedVoiceGroupFromRaceToPvg_result = Citizen.invokeNative<void>('0x4349438F7A83A186', ped, raceToPVGHash);
	return setPedVoiceGroupFromRaceToPvg_result;
}