/**
 * CFX:GET_RESOURCE_BY_FIND_INDEX
 *
 * 0X387246B7

 * 
 * ------------------------------------------------------------------
 * @param {number} findIndex The index of the resource (starting at 0)
 * @returns {string}  The resource name as a `string`
 */
export function getResourceByFindIndex(findIndex: number): string {
	const getResourceByFindIndex_result = Citizen.invokeNative<string>('0X387246B7', findIndex);
	return getResourceByFindIndex_result;
}