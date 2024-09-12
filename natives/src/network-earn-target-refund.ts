/**
 * MONEY:NETWORK_EARN_TARGET_REFUND
 *
 * 0x1B7FCA28E35CDBB0

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} target
 */
export function networkEarnTargetRefund(amount: number, target: number): void {
	const networkEarnTargetRefund_result = Citizen.invokeNative<void>('0x1B7FCA28E35CDBB0', amount, target);
	return networkEarnTargetRefund_result;
}