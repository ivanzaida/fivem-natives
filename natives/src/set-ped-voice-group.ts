import { PedIndex } from '@ivanzaida/structures'

/**
 * AUDIO:SET_PED_VOICE_GROUP
 *
 * 0x996F4A3208DAD314

 * 
 * From the scripts:
 * 
 * AUDIO::SET_PED_VOICE_GROUP(PLAYER::PLAYER_PED_ID(), MISC::GET_HASH_KEY("PAIGE_PVG"));
 * AUDIO::SET_PED_VOICE_GROUP(PLAYER::PLAYER_PED_ID(), MISC::GET_HASH_KEY("TALINA_PVG"));
 * AUDIO::SET_PED_VOICE_GROUP(PLAYER::PLAYER_PED_ID(), MISC::GET_HASH_KEY("FEMALE_LOST_BLACK_PVG"));
 * AUDIO::SET_PED_VOICE_GROUP(PLAYER::PLAYER_PED_ID(), MISC::GET_HASH_KEY("FEMALE_LOST_WHITE_PVG"));
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} pvgHash
 */
export function setPedVoiceGroup(ped: PedIndex, pvgHash: number): void {
	const setPedVoiceGroup_result = Citizen.invokeNative<void>('0x996F4A3208DAD314', ped, pvgHash);
	return setPedVoiceGroup_result;
}