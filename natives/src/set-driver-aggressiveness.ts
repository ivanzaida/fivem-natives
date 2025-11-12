import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_DRIVER_AGGRESSIVENESS
 *
 * 0x8C863F5EB14919DB

 * 
 * Set's a driver's aggressiveness value, mostly used to determine
 * how fast they want to drive
 * 
 * range 0.0f - 1.0f
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} driverAggressiveness
 */
export function setDriverAggressiveness(ped: PedIndex, driverAggressiveness: number): void {
	const setDriverAggressiveness_result = Citizen.invokeNative<void>('0x8C863F5EB14919DB', ped, driverAggressiveness);
	return setDriverAggressiveness_result;
}