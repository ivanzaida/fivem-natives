/**
 * DATAFILE:DATAARRAY_ADD_VECTOR
 *
 * 0xB8DA6C44772DBE30

 * 
 * ------------------------------------------------------------------
 * @param {string[]} arr
 * @param {number} valueX
 * @param {number} valueY
 * @param {number} valueZ
 */
export function dataarrayAddVector(arr: string[], valueX: number, valueY: number, valueZ: number): void {
	const dataarrayAddVector_result = Citizen.invokeNative<void>('0xB8DA6C44772DBE30', arr, valueX, valueY, valueZ);
	return dataarrayAddVector_result;
}