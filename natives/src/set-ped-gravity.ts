import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_GRAVITY
 *
 * 0x7EF69980DE8B28B0

 * 
 * Not approved for use in network scripts
 * 
 * enable or disable the gravity of a ped
 * 
 * Examples:
 * PED::SET_PED_GRAVITY(PLAYER::PLAYER_PED_ID(), 0x00000001);
 * PED::SET_PED_GRAVITY(Local_289[iVar0 /20/], 0x00000001);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} isAffectedByGravity
 */
export function setPedGravity(ped: PedIndex, isAffectedByGravity: boolean): void {
	const setPedGravity_result = Citizen.invokeNative<void>('0x7EF69980DE8B28B0', ped, isAffectedByGravity);
	return setPedGravity_result;
}