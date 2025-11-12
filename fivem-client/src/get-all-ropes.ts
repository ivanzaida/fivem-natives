/**
 * CFX:GET_ALL_ROPES
 *
 * 0x760A2D67

 * Returns all rope handles. The data returned adheres to the following layout:```[ 770, 1026, 1282, 1538, 1794, 2050, 2306, 2562, 2818, 3074, 3330, 3586, 3842, 4098, 4354, 4610, ...]```
 * 
 * ------------------------------------------------------------------
 * @returns {number}  An object containing a list of all rope handles.
 */
export function getAllRopes(): number[] {
	const getAllRopes_result = Citizen.invokeNative<number[]>('0x760A2D67', Citizen.resultAsObject());
	return getAllRopes_result;
}