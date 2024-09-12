import { SaveHouseIndex } from '@ivanzaida/structures'

/**
 * MISC:SET_SAVE_HOUSE
 *
 * 0xC372A80C7719DF28

 * 
 * ------------------------------------------------------------------
 * @param {SaveHouseIndex} saveHouse
 * @param {boolean} newEnabledFlag
 * @param {boolean} availableForAutosaves
 */
export function setSaveHouse(saveHouse: SaveHouseIndex, newEnabledFlag: boolean, availableForAutosaves: boolean): void {
	const setSaveHouse_result = Citizen.invokeNative<void>('0xC372A80C7719DF28', saveHouse, newEnabledFlag, availableForAutosaves);
	return setSaveHouse_result;
}