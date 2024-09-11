/**
 * NETWORK:NETWORK_GAMERTAG_FROM_HANDLE_PENDING
 *
 * 0x6B6DB41744C41D5E

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkGamertagFromHandlePending(): boolean {
	const networkGamertagFromHandlePending_result = Citizen.invokeNative<boolean>('0x6B6DB41744C41D5E', );
	return networkGamertagFromHandlePending_result;
}