import { PedIndex, EStartRagdollTask } from '@ivanzaida/structures'

/**
 * PED:SET_PED_TO_RAGDOLL
 *
 * 0xB1C2DC5C115FA50D

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
 * @param {PedIndex} ped
 * @param {number} minTime
 * @param {number} maxTime
 * @param {EStartRagdollTask} startTask
 * @param {boolean} abortIfInjured
 * @param {boolean} abortIfDead
 * @param {boolean} forceScriptControl If you require to control a ped's ragdoll even though they may take additional damage This both stops the ped from becoming injured and lowers the magnitude of any bullet impact forces.
 * @returns {boolean}  
 */
export function setPedToRagdoll(ped: PedIndex, minTime: number, maxTime: number, startTask: EStartRagdollTask | number, abortIfInjured: boolean = true, abortIfDead: boolean = true, forceScriptControl: boolean = false): boolean {
	const setPedToRagdoll_result = Citizen.invokeNative<boolean>('0xB1C2DC5C115FA50D', ped, minTime, maxTime, startTask, abortIfInjured, abortIfDead, forceScriptControl);
	return setPedToRagdoll_result;
}