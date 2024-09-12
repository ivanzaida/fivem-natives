/**
 * NETWORK:NETWORK_IS_GETTING_GAMER_STATUS
 *
 * 0x124398C14F6A1133

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsGettingGamerStatus(): boolean {
	const networkIsGettingGamerStatus_result = Citizen.invokeNative<boolean>('0x124398C14F6A1133', );
	return networkIsGettingGamerStatus_result;
}