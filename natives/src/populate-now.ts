/**
 * MISC:POPULATE_NOW
 *
 * 0x1BBEB35757ED1961

 * 
 * e.g. reducing the number of real peds in favour of dummy peds
 * Can you check with Obbe before using this.
 * Has to be called every frame during the slow mission section, please only call
 * It during the specifically slow part (e.g. gunfight) and not hte whole mission.
 * 
 * spawns a few distant/out-of-sight peds, vehicles, animals etc each time it is called
 * 
 * 
 * ------------------------------------------------------------------
 */
export function populateNow(): void {
	const populateNow_result = Citizen.invokeNative<void>('0x1BBEB35757ED1961', );
	return populateNow_result;
}