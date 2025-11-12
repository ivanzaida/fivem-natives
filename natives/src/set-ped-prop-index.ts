import { PedIndex, EPedPropPosition } from '@ivanzaida/structures'

/**
 * PED:SET_PED_PROP_INDEX
 *
 * 0x7F08C4791E6D6969

 * 
 * ComponentId can be set to various things based on what category you're wanting to set
 * enum PedPropsData
 * {
 *     PED_PROP_HATS = 0,
 *     PED_PROP_GLASSES = 1,
 *  PED_PROP_EARS = 2,
 *     PED_PROP_WATCHES = 3,
 * };
 * Usage: SET_PED_PROP_INDEX(playerPed, PED_PROP_HATS, GET_NUMBER_OF_PED_PROP_DRAWABLE_VARIATIONS(playerPed, PED_PROP_HATS), GET_NUMBER_OF_PED_PROP_TEXTURE_VARIATIONS(playerPed, PED_PROP_HATS, 0), TRUE);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EPedPropPosition} position
 * @param {number} newProp
 * @param {number} newText
 * @param {boolean} syncWithBlend
 */
export function setPedPropIndex(ped: PedIndex, position: EPedPropPosition | number, newProp: number, newText: number = 0, syncWithBlend: boolean = false): void {
	const setPedPropIndex_result = Citizen.invokeNative<void>('0x7F08C4791E6D6969', ped, position, newProp, newText, syncWithBlend);
	return setPedPropIndex_result;
}