/**
 * SOCIALCLUB:SC_CACHE_NEW_ROCKSTAR_MSGS
 *
 * 0x865FD8AC99AF6852

 * 
 * ------------------------------------------------------------------
 * @param {boolean} cache
 */
export function scCacheNewRockstarMsgs(cache: boolean): void {
	const scCacheNewRockstarMsgs_result = Citizen.invokeNative<void>('0x865FD8AC99AF6852', cache);
	return scCacheNewRockstarMsgs_result;
}