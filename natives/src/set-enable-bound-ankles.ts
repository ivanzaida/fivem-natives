import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_ENABLE_BOUND_ANKLES
 *
 * 0xCF10C35FF25A86A7

 * 
 * Used with SET_ENABLE_HANDCUFFS in decompiled scripts. From my observations, I have noticed that while being ragdolled you are not able to get up but you can still run. Your legs can also bend.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} enable
 */
export function setEnableBoundAnkles(ped: PedIndex, enable: boolean): void {
	const setEnableBoundAnkles_result = Citizen.invokeNative<void>('0xCF10C35FF25A86A7', ped, enable);
	return setEnableBoundAnkles_result;
}