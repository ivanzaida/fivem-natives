import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_DEAD_OR_DYING
 *
 * 0x89568FA9A6BC0B4A

 * 
 * Cannot give ped tasks if dead or dying. I.e. if the ped is running CTaskDamageDeath.
 * Calling IS_PED_FATALLY_INJURED doesn't necessarily mean that CTaskDamageDeath has started yet
 * 
 * Seems to consistently return true if the ped is dead.
 * 
 * p1 is always passed 1 in the scripts.
 * 
 * I suggest to remove "OR_DYING" part, because it does not detect dying phase.
 * 
 * That's what the devs call it, cry about it.
 * 
 * lol
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} checkMeleeDeathFlags , if TRUE IS_PED_DEAD_OR_DYING will return TRUE In the case of doing a paired takedown move before they are running the dead task
 * @returns {boolean}  
 */
export function isPedDeadOrDying(ped: PedIndex, checkMeleeDeathFlags: boolean = true): boolean {
	const isPedDeadOrDying_result = Citizen.invokeNative<boolean>('0x89568FA9A6BC0B4A', ped, checkMeleeDeathFlags);
	return isPedDeadOrDying_result;
}