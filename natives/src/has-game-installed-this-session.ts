/**
 * MISC:HAS_GAME_INSTALLED_THIS_SESSION
 *
 * 0xF27FC86E347471F1

 * 
 * Returns true if the game has installed during this session, false if it was already installed when the game booted
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function hasGameInstalledThisSession(): boolean {
	const hasGameInstalledThisSession_result = Citizen.invokeNative<boolean>('0xF27FC86E347471F1', );
	return hasGameInstalledThisSession_result;
}