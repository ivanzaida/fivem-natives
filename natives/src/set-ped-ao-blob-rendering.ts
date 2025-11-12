import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_AO_BLOB_RENDERING
 *
 * 0x949A46B6409BF541

 * 
 * Enable/disable ped shadow (ambient occlusion). https://gfycat.com/thankfulesteemedgecko
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} val
 */
export function setPedAoBlobRendering(ped: PedIndex, val: boolean): void {
	const setPedAoBlobRendering_result = Citizen.invokeNative<void>('0x949A46B6409BF541', ped, val);
	return setPedAoBlobRendering_result;
}