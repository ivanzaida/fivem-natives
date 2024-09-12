import { EELevelIndex } from '@ivanzaida/structures'

/**
 * MISC:GET_INDEX_OF_CURRENT_LEVEL
 *
 * 0xC5C8FC4D42BFD749

 * 
 * ------------------------------------------------------------------
 * @returns {EELevelIndex}  
 */
export function getIndexOfCurrentLevel(): EELevelIndex {
	const getIndexOfCurrentLevel_result = Citizen.invokeNative<EELevelIndex>('0xC5C8FC4D42BFD749', );
	return getIndexOfCurrentLevel_result;
}