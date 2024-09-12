/**
 * NETWORK:NETWORK_IS_FINDING_GAMERS
 *
 * 0xDD718E172A233DC5

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsFindingGamers(): boolean {
	const networkIsFindingGamers_result = Citizen.invokeNative<boolean>('0xDD718E172A233DC5', );
	return networkIsFindingGamers_result;
}