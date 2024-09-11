import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_VISUAL_FIELD_PERIPHERAL_RANGE
 *
 * 0xAF30637CFE0F3A89

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} distance
 */
export function setPedVisualFieldPeripheralRange(ped: PedIndex, distance: number): void {
	const setPedVisualFieldPeripheralRange_result = Citizen.invokeNative<void>('0xAF30637CFE0F3A89', ped, distance);
	return setPedVisualFieldPeripheralRange_result;
}