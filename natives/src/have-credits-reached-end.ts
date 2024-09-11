/**
 * MISC:HAVE_CREDITS_REACHED_END
 *
 * 0xDCD722759F93678D

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function haveCreditsReachedEnd(): boolean {
	const haveCreditsReachedEnd_result = Citizen.invokeNative<boolean>('0xDCD722759F93678D', );
	return haveCreditsReachedEnd_result;
}