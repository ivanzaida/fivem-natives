import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:UPDATE_PED_HEAD_BLEND_DATA
 *
 * 0xB320F619D5CC2D27

 * 
 * See SET_PED_HEAD_BLEND_DATA().
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} headBlend
 * @param {number} texBlend
 * @param {number} varBlend
 */
export function updatePedHeadBlendData(ped: PedIndex, headBlend: number, texBlend: number, varBlend: number): void {
	const updatePedHeadBlendData_result = Citizen.invokeNative<void>('0xB320F619D5CC2D27', ped, headBlend, texBlend, varBlend);
	return updatePedHeadBlendData_result;
}