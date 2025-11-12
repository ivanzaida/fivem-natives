/**
 * NETWORK:NETWORK_IS_SESSION_STARTED
 *
 * 0x2312C61FB9082621

 * 
 * This checks if player is playing on gta online or not.
 * Please add an if and block your mod if this is "true".
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsSessionStarted(): boolean {
	const networkIsSessionStarted_result = Citizen.invokeNative<boolean>('0x2312C61FB9082621', );
	return networkIsSessionStarted_result;
}