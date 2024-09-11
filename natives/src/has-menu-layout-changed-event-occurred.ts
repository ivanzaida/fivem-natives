/**
 * HUD:HAS_MENU_LAYOUT_CHANGED_EVENT_OCCURRED
 *
 * 0x0A5BC2689B1DF62B

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function hasMenuLayoutChangedEventOccurred(): boolean {
	const hasMenuLayoutChangedEventOccurred_result = Citizen.invokeNative<boolean>('0x0A5BC2689B1DF62B', );
	return hasMenuLayoutChangedEventOccurred_result;
}