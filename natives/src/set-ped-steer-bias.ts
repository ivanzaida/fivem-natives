import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_STEER_BIAS
 *
 * 0xD4D1973154415E9B

 * 
 * The steer bias value gets added to the players control input.
 * The bias is in the range -1.0f (hard right) to 1.0f (hard left). Ie If you set the bias to 0.1 the ped will pull to the left a little bit.
 * By modifying the value from frame to frame you can emulate buggered controls or somebody fighting over control of the ped.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} bias
 */
export function setPedSteerBias(ped: PedIndex, bias: number): void {
	const setPedSteerBias_result = Citizen.invokeNative<void>('0xD4D1973154415E9B', ped, bias);
	return setPedSteerBias_result;
}