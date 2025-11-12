/**
 * MONEY:NETWORK_EARN_DISPATCH_CALL
 *
 * 0x78B315C577CF6D01

 * 
 * triggers when completing a new Dispatch Call mission
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} missionId
 */
export function networkEarnDispatchCall(amount: number, missionId: number): void {
	const networkEarnDispatchCall_result = Citizen.invokeNative<void>('0x78B315C577CF6D01', amount, missionId);
	return networkEarnDispatchCall_result;
}