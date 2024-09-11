/**
 * NETWORK:NETWORK_SESSION_IS_DISPLAYING_INVITE_CONFIRMATION
 *
 * 0xD03C646667D8D5F1

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkSessionIsDisplayingInviteConfirmation(): boolean {
	const networkSessionIsDisplayingInviteConfirmation_result = Citizen.invokeNative<boolean>('0xD03C646667D8D5F1', );
	return networkSessionIsDisplayingInviteConfirmation_result;
}