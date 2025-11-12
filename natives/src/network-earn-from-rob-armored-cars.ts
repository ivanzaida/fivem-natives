/**
 * MONEY:NETWORK_EARN_FROM_ROB_ARMORED_CARS
 *
 * 0xAA3D72C5CCFC8EF3

 * 
 * For the money bags that drop a max of $40,000. Often called 40k bags.
 * 
 * Most likely NETWORK_EARN_FROM_ROB
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 */
export function networkEarnFromRobArmoredCars(amount: number): void {
	const networkEarnFromRobArmoredCars_result = Citizen.invokeNative<void>('0xAA3D72C5CCFC8EF3', amount);
	return networkEarnFromRobArmoredCars_result;
}