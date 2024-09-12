/**
 * MONEY:NETWORK_EARN_CASINO_TIME_TRIAL_WIN
 *
 * 0x416DEBEC2AF19312

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 */
export function networkEarnCasinoTimeTrialWin(amount: number): void {
	const networkEarnCasinoTimeTrialWin_result = Citizen.invokeNative<void>('0x416DEBEC2AF19312', amount);
	return networkEarnCasinoTimeTrialWin_result;
}