import { RopeIndex } from '@ivanzaida/structures'

/**
 * PHYSICS:ROPE_SET_UPDATE_ORDER
 *
 * 0x0BE3274CCADBCC99

 * 
 * ------------------------------------------------------------------
 * @param {RopeIndex} ropeID
 * @param {number} updateOrder
 */
export function ropeSetUpdateOrder(ropeID: RopeIndex, updateOrder: number): void {
	const ropeSetUpdateOrder_result = Citizen.invokeNative<void>('0x0BE3274CCADBCC99', ropeID, updateOrder);
	return ropeSetUpdateOrder_result;
}