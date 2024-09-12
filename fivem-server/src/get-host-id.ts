/**
 * CFX:GET_HOST_ID
 *
 * 0x5F70F5A3

 * 
 * ------------------------------------------------------------------
 * @returns {string}  
 */
export function getHostId(): string {
	const getHostId_result = Citizen.invokeNative<string>('0x5F70F5A3', );
	return getHostId_result;
}