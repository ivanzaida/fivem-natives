/**
 * CFX:GET_ALL_PEDS
 *
 * 0xB8584FEF

 * Returns all peds handles known to the server.The data returned adheres to the following layout:```[127, 42, 13, 37]```
 * 
 * ------------------------------------------------------------------
 * @returns {number}  An object containing a list of peds handles.
 */
export function getAllPeds(): number[] {
	const getAllPeds_result = Citizen.invokeNative<number[]>('0xB8584FEF', Citizen.resultAsObject());
	return getAllPeds_result;
}