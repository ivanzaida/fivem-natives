import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_PED_TO_RAGDOLL
 *
 * 0x83CB5052

 * 
 * A ped will only switch to a ragdoll if it's onscreen and within range of the player.
 * 
 * p4/p5: Unused in TU27
 * Ragdoll Types:
 * 0: CTaskNMRelax
 * 1: CTaskNMScriptControl: Hardcoded not to work in networked environments.
 * Else: CTaskNMBalance
 * time1- Time(ms) Ped is in ragdoll mode; only applies to ragdoll types 0 and not 1.
 * 
 * time2- Unknown time, in milliseconds
 * 
 * ragdollType-
 * 0 : Normal ragdoll
 * 1 : Falls with stiff legs/body
 * 2 : Narrow leg stumble(may not fall)
 * 3 : Wide leg stumble(may not fall)
 * 
 * p4, p5, p6- No idea. In R's scripts they are usually either "true, true, false" or "false, false, false".
 * 
 * 
 * 
 * 
 * EDIT 3/11/16: unclear what 'mircoseconds' mean-- a microsecond is 1000x a ms, so time2 must be 1000x time1?  more testing needed.  -sob
 * 
 * Edit Mar 21, 2017: removed part about time2 being the microseconds version of time1. this just isn't correct. time2 is in milliseconds, and time1 and time2 don't seem to be connected in any way.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The ped to ragdoll.
 * @param {number} minTime Time(ms) Ped is in ragdoll mode; only applies to ragdoll types 0 and not 1.
 * @param {number} maxTime
 * @param {number} ragdollType
 * @param {boolean} bAbortIfInjured unused
 * @param {boolean} bAbortIfDead unused
 * @param {boolean} bForceScriptControl
 * @returns {boolean}  
 */
export function setPedToRagdoll(ped: PedIndex, minTime: number, maxTime: number, ragdollType: number, bAbortIfInjured: boolean, bAbortIfDead: boolean, bForceScriptControl: boolean): boolean {
	const setPedToRagdoll_result = Citizen.invokeNative<boolean>('0x83CB5052', ped, minTime, maxTime, ragdollType, bAbortIfInjured, bAbortIfDead, bForceScriptControl);
	return setPedToRagdoll_result;
}