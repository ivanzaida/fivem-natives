/**
 * MISC:IS_STEAM_VERSION
 *
 * 0x32BC1B96D39D2E38

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isSteamVersion(): boolean {
	const isSteamVersion_result = Citizen.invokeNative<boolean>('0x32BC1B96D39D2E38', );
	return isSteamVersion_result;
}