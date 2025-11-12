/**
 * STREAMING:SET_ALL_MAPDATA_CULLED
 *
 * 0x8F8802BEE0727FD5

 * 
 * Sets all of the map data to be culled (or not)
 * 
 * This native does absolutely nothing, just a nullsub
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} culled
 */
export function setAllMapdataCulled(culled: boolean): void {
	const setAllMapdataCulled_result = Citizen.invokeNative<void>('0x8F8802BEE0727FD5', culled);
	return setAllMapdataCulled_result;
}