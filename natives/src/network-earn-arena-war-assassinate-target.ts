/**
 * MONEY:NETWORK_EARN_ARENA_WAR_ASSASSINATE_TARGET
 *
 * 0xC46CA38367F16578

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 */
export function networkEarnArenaWarAssassinateTarget(amount: number): void {
	const networkEarnArenaWarAssassinateTarget_result = Citizen.invokeNative<void>('0xC46CA38367F16578', amount);
	return networkEarnArenaWarAssassinateTarget_result;
}