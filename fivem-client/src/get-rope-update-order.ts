/**
 * CFX:GET_ROPE_UPDATE_ORDER
 *
 * 0X2AB2E0F6

 * 
 * ------------------------------------------------------------------
 * @param {number} rope The rope to get the update order for.
 * @returns {number}  The rope's update order.
 */
export function getRopeUpdateOrder(rope: number): number {
	const getRopeUpdateOrder_result = Citizen.invokeNative<number>('0X2AB2E0F6', rope);
	return getRopeUpdateOrder_result;
}