/**
 * MONEY:NETWORK_EARN_DOOMSDAY_FINALE_BONUS
 *
 * 0x80D494C63CA32BD2

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} vehiclemodelid
 */
export function networkEarnDoomsdayFinaleBonus(amount: number, vehiclemodelid: number = 0): void {
	const networkEarnDoomsdayFinaleBonus_result = Citizen.invokeNative<void>('0x80D494C63CA32BD2', amount, vehiclemodelid);
	return networkEarnDoomsdayFinaleBonus_result;
}