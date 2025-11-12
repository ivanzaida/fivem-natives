import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:SET_PED_PATH_CLIMB_COST_MODIFIER
 *
 * 0x1DEB47A41CF1C17E

 * 
 * Sets a multiplier to the cost function which decides whether a ped should climb whilst navigating
 * Default value is 1.0 which means the ped behaves as normal
 * The lower the value, the more likely a ped is to use a climb.
 * At 0.5 the ped will be twice as likely to climb as usual
 * At 0.0 the ped will climb just as likely as walk, even for the smallest movements (so don't use a value this low!)
 * At 2.0 the ped will be half as likely to use a climb
 * Etc, etc..
 * Be sure to set this back to 1.0 after use, or peds will behave strangely even after the mission ends.
 * 
 * Default modifier is 1.0, minimum is 0.0 and maximum is 10.0.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} climbModifier
 */
export function setPedPathClimbCostModifier(ped: PedIndex, climbModifier: number): void {
	const setPedPathClimbCostModifier_result = Citizen.invokeNative<void>('0x1DEB47A41CF1C17E', ped, climbModifier);
	return setPedPathClimbCostModifier_result;
}