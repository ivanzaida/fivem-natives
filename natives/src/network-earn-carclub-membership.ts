/**
 * MONEY:NETWORK_EARN_CARCLUB_MEMBERSHIP
 *
 * 0x7A3449D1CF40578C

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 */
export function networkEarnCarclubMembership(amount: number): void {
	const networkEarnCarclubMembership_result = Citizen.invokeNative<void>('0x7A3449D1CF40578C', amount);
	return networkEarnCarclubMembership_result;
}