/**
 * MONEY:NETWORK_ECONOMY_HAS_FIXED_CRAZY_NUMBERS
 *
 * 0xF0E83DAB719BAF47

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkEconomyHasFixedCrazyNumbers(): boolean {
	const networkEconomyHasFixedCrazyNumbers_result = Citizen.invokeNative<boolean>('0xF0E83DAB719BAF47', );
	return networkEconomyHasFixedCrazyNumbers_result;
}