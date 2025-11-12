import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_PLAYS_HEAD_ON_HORN_ANIM_WHEN_DIES_IN_VEHICLE
 *
 * 0xD78BC33933604161

 * 
 * This native does absolutely nothing, just a nullsub
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} alwaysUseHeadOnHornAnim
 */
export function setPedPlaysHeadOnHornAnimWhenDiesInVehicle(ped: PedIndex, alwaysUseHeadOnHornAnim: boolean): void {
	const setPedPlaysHeadOnHornAnimWhenDiesInVehicle_result = Citizen.invokeNative<void>('0xD78BC33933604161', ped, alwaysUseHeadOnHornAnim);
	return setPedPlaysHeadOnHornAnimWhenDiesInVehicle_result;
}