import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_DRIVER_RACING_MODIFIER
 *
 * 0xF823BACD940DEAF1

 * 
 * Sets a driver's racing modifiera value between 0 and 1 that
 * adjusts the lookahead when steering along a vehicle path.
 * Ambient vehicles will have a value of 0 for this unless overridden by script.
 * 
 * Scripts use 0.2, 0.5 and 1.0. Value must be >= 0.0 && <= 1.0
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} racingModifier
 */
export function setDriverRacingModifier(ped: PedIndex, racingModifier: number): void {
	const setDriverRacingModifier_result = Citizen.invokeNative<void>('0xF823BACD940DEAF1', ped, racingModifier);
	return setDriverRacingModifier_result;
}