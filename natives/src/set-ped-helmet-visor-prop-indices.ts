import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_HELMET_VISOR_PROP_INDICES
 *
 * 0xE354CDA241A4A73E

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} visorUp
 * @param {number} helmetVisorUpPropId
 * @param {number} helmetVisorDownPropId
 */
export function setPedHelmetVisorPropIndices(ped: PedIndex, visorUp: boolean = false, helmetVisorUpPropId: number = 1, helmetVisorDownPropId: number = 1): void {
	const setPedHelmetVisorPropIndices_result = Citizen.invokeNative<void>('0xE354CDA241A4A73E', ped, visorUp, helmetVisorUpPropId, helmetVisorDownPropId);
	return setPedHelmetVisorPropIndices_result;
}