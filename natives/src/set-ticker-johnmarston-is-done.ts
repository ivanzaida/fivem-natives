/**
 * MISC:SET_TICKER_JOHNMARSTON_IS_DONE
 *
 * 0xB691EC20AD2A1AC2

 * 
 * Set TRUE that to tell the player that john marston is available in the character creator appears the first time the player
 * connected up to the social club and then never again.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function setTickerJohnmarstonIsDone(): void {
	const setTickerJohnmarstonIsDone_result = Citizen.invokeNative<void>('0xB691EC20AD2A1AC2', );
	return setTickerJohnmarstonIsDone_result;
}