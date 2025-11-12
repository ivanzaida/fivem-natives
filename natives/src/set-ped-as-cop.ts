import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_AS_COP
 *
 * 0x91B8DEBF573007DE

 * 
 * Turns the desired ped into a cop. If you use this on the player ped, you will become almost invisible to cops dispatched for you. You will also report your own crimes, get a generic cop voice, get a cop-vision-cone on the radar, and you will be unable to shoot at other cops. SWAT and Army will still shoot at you. Toggling ped as "false" has no effect; you must change p0's ped model to disable the effect.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} setRelationshipGroup
 */
export function setPedAsCop(ped: PedIndex, setRelationshipGroup: boolean = true): void {
	const setPedAsCop_result = Citizen.invokeNative<void>('0x91B8DEBF573007DE', ped, setRelationshipGroup);
	return setPedAsCop_result;
}