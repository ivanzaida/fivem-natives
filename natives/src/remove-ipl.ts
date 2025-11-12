/**
 * STREAMING:REMOVE_IPL
 *
 * 0x5373E9377066509E

 * 
 * Removes an IPL from the map.
 * 
 * Full list of IPLs and interior entity sets by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ipls.json
 * 
 * Example:
 * C#:
 * Function.Call(Hash.REMOVE_IPL, "trevorstrailertidy");
 * 
 * C++:
 * STREAMING::REMOVE_IPL("trevorstrailertidy");
 * 
 * iplName = Name of IPL you want to remove.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} iplName
 */
export function removeIpl(iplName: string): void {
	const removeIpl_result = Citizen.invokeNative<void>('0x5373E9377066509E', iplName);
	return removeIpl_result;
}