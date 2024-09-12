/**
 * STATS:PLAYSTATS_WEBSITE_VISITED
 *
 * 0x60C742268AC666E4

 * 
 * ------------------------------------------------------------------
 * @param {number} siteId
 * @param {number} timeSpent
 */
export function playstatsWebsiteVisited(siteId: number, timeSpent: number = 0): void {
	const playstatsWebsiteVisited_result = Citizen.invokeNative<void>('0x60C742268AC666E4', siteId, timeSpent);
	return playstatsWebsiteVisited_result;
}