/**
 * STREAMING:IS_IPL_ACTIVE
 *
 * 0x5AEB336317DC4151

 * 
 * Full list of IPLs and interior entity sets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ipls.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} iplName
 * @returns {boolean}  
 */
export function isIplActive(iplName: string): boolean {
	const isIplActive_result = Citizen.invokeNative<boolean>('0x5AEB336317DC4151', iplName);
	return isIplActive_result;
}