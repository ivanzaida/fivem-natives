/**
 * MONEY:NETWORK_EARN_ARENA_WAR_EVENT_CARGO
 *
 * 0x360C31F0E45DAA5F

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 */
export function networkEarnArenaWarEventCargo(amount: number): void {
	const networkEarnArenaWarEventCargo_result = Citizen.invokeNative<void>('0x360C31F0E45DAA5F', amount);
	return networkEarnArenaWarEventCargo_result;
}