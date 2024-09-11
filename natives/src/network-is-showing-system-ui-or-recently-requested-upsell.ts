/**
 * NETWORK:NETWORK_IS_SHOWING_SYSTEM_UI_OR_RECENTLY_REQUESTED_UPSELL
 *
 * 0x348A57FA9B720374

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsShowingSystemUiOrRecentlyRequestedUpsell(): boolean {
	const networkIsShowingSystemUiOrRecentlyRequestedUpsell_result = Citizen.invokeNative<boolean>('0x348A57FA9B720374', );
	return networkIsShowingSystemUiOrRecentlyRequestedUpsell_result;
}