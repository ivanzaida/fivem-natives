import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_DRIVER_ABILITY
 *
 * 0x6D618646705A0465

 * 
 * Set's a driver's ability value, used to govern things like how
 * often they use their lights or how well they care to park
 * 
 * The function specifically verifies the value is equal to, or less than 1.0f. If it is greater than 1.0f, the function does nothing at all.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} driverAbility
 */
export function setDriverAbility(ped: PedIndex, driverAbility: number): void {
	const setDriverAbility_result = Citizen.invokeNative<void>('0x6D618646705A0465', ped, driverAbility);
	return setDriverAbility_result;
}