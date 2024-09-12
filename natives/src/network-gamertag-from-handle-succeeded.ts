/**
 * NETWORK:NETWORK_GAMERTAG_FROM_HANDLE_SUCCEEDED
 *
 * 0xA44A2B8A83947D02

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkGamertagFromHandleSucceeded(): boolean {
	const networkGamertagFromHandleSucceeded_result = Citizen.invokeNative<boolean>('0xA44A2B8A83947D02', );
	return networkGamertagFromHandleSucceeded_result;
}