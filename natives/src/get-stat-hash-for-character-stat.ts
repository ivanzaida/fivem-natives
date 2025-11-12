import { ModelNames } from '@ivanzaida/structures'

/**
 * STATS:_GET_STAT_HASH_FOR_CHARACTER_STAT
 *
 * 0xD69CE161FE614531

 * 
 * Returns stat hash based on dataType, statIndex/statId and characterSlot. Related to CStatsMpCharacterMappingData
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {ModelNames}  
 */
export function getStatHashForCharacterStat(): ModelNames {
	const getStatHashForCharacterStat_result = Citizen.invokeNative<ModelNames>('0xD69CE161FE614531', );
	return getStatHashForCharacterStat_result;
}