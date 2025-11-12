/**
 * CFX:GET_ALL_OBJECTS
 *
 * 0x6886C3FE

 * Returns all object handles known to the server.The data returned adheres to the following layout:```[127, 42, 13, 37]```
 * 
 * ------------------------------------------------------------------
 * @returns {number}  An object containing a list of object handles.
 */
export function getAllObjects(): number[] {
	const getAllObjects_result = Citizen.invokeNative<number[]>('0x6886C3FE', Citizen.resultAsObject());
	return getAllObjects_result;
}