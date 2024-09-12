/**
 * CFX:GET_INVOKING_RESOURCE
 *
 * 0x4D52FE5B

 * 
 * ------------------------------------------------------------------
 * @returns {string}  
 */
export function getInvokingResource(): string {
	const getInvokingResource_result = Citizen.invokeNative<string>('0x4D52FE5B', );
	return getInvokingResource_result;
}