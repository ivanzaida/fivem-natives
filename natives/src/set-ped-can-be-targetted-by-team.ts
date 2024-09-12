import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_CAN_BE_TARGETTED_BY_TEAM
 *
 * 0x6A17FC9B41F35458

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} team
 * @param {boolean} allowTargetted
 */
export function setPedCanBeTargettedByTeam(ped: PedIndex, team: number, allowTargetted: boolean): void {
	const setPedCanBeTargettedByTeam_result = Citizen.invokeNative<void>('0x6A17FC9B41F35458', ped, team, allowTargetted);
	return setPedCanBeTargettedByTeam_result;
}