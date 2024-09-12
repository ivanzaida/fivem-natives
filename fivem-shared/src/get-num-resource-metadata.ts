/**
 * CFX:GET_NUM_RESOURCE_METADATA
 *
 * 0X776E864

 * Gets the amount of metadata values with the specified key existing in the specified resource's manifest.See also: [Resource manifest](https://docs.fivem.net/resources/manifest/)
 * 
 * ------------------------------------------------------------------
 * @param {string} resourceName The resource name.
 * @param {string} metadataKey The key to look up in the resource manifest.
 * @returns {number}  
 */
export function getNumResourceMetadata(resourceName: string, metadataKey: string): number {
	const getNumResourceMetadata_result = Citizen.invokeNative<number>('0X776E864', resourceName, metadataKey);
	return getNumResourceMetadata_result;
}