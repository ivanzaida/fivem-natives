import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:REGISTER_TARGET
 *
 * 0xC225BC409BD24794

 * 
 * PED::REGISTER_TARGET(l_216, PLAYER::PLAYER_PED_ID()); from re_prisonbreak.txt.
 * 
 * l_216 = RECSBRobber1
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {PedIndex} targetPed
 */
export function registerTarget(ped: PedIndex, targetPed: PedIndex): void {
	const registerTarget_result = Citizen.invokeNative<void>('0xC225BC409BD24794', ped, targetPed);
	return registerTarget_result;
}