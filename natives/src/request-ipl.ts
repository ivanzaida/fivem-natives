/**
 * STREAMING:REQUEST_IPL
 *
 * 0xECFC57F5F11BCD83

 * 
 * Exemple: REQUEST_IPL("TrevorsTrailerTrash");
 * 
 * Full list of IPLs and interior entity sets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ipls.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} iplName
 */
export function requestIpl(iplName: string): void {
	const requestIpl_result = Citizen.invokeNative<void>('0xECFC57F5F11BCD83', iplName);
	return requestIpl_result;
}