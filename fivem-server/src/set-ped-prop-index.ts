import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_PED_PROP_INDEX
 *
 * 0x829F2E2

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
 * @param {PedIndex} ped The ped handle.
 * @param {number} componentId The component that you want to set. Refer to [SET_PED_COMPONENT_VARIATION](\_0x262B14F48D29DE80).
 * @param {number} drawableId The drawable id that is going to be set. Refer to [GET_NUMBER_OF_PED_PROP_DRAWABLE_VARIATIONS](\_0x5FAF9754E789FB47).
 * @param {number} textureId The texture id of the drawable. Refer to [GET_NUMBER_OF_PED_PROP_TEXTURE_VARIATIONS](\_0xA6E7F1CEB523E171).
 * @param {boolean} attach Attached or not.
 */
export function setPedPropIndex(ped: PedIndex, componentId: number, drawableId: number, textureId: number, attach: boolean): void {
	const setPedPropIndex_result = Citizen.invokeNative<void>('0x829F2E2', ped, componentId, drawableId, textureId, attach);
	return setPedPropIndex_result;
}