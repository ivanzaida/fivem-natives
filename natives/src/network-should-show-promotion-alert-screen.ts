/**
 * NETWORK:NETWORK_SHOULD_SHOW_PROMOTION_ALERT_SCREEN
 *
 * 0xCA8FCC9293149C67

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkShouldShowPromotionAlertScreen(): boolean {
	const networkShouldShowPromotionAlertScreen_result = Citizen.invokeNative<boolean>('0xCA8FCC9293149C67', );
	return networkShouldShowPromotionAlertScreen_result;
}