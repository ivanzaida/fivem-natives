/**
 * CFX:GET_RESOURCE_METADATA
 *
 * 0x964BAB1D

 * Gets the metadata value at a specified key/index from a resource's manifest.See also: [Resource manifest](https://docs.fivem.net/docs/scripting-reference/resource-manifest/resource-manifest/)
 * 
 * ------------------------------------------------------------------
 * @param {string} resourceName The resource name.
 * @param {string} metadataKey The key in the resource manifest.
 * @param {number} index The value index, in a range from [0..GET_NUM_RESOURCE_METDATA1].
 * @returns {string}  
 */
export function getResourceMetadata(resourceName: string, metadataKey: string, index: number): string {
	const getResourceMetadata_result = Citizen.invokeNative<string>('0x964BAB1D', resourceName, metadataKey, index);
	return getResourceMetadata_result;
}