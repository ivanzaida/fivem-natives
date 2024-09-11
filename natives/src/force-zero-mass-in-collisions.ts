import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:FORCE_ZERO_MASS_IN_COLLISIONS
 *
 * 0xF1EA3BEE2C40F823

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function forceZeroMassInCollisions(ped: PedIndex): void {
	const forceZeroMassInCollisions_result = Citizen.invokeNative<void>('0xF1EA3BEE2C40F823', ped);
	return forceZeroMassInCollisions_result;
}