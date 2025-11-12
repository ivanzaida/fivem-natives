import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_WETNESS_ENABLED_THIS_FRAME
 *
 * 0x0DFA7D3DCFE10E65

 * 
 * combined with PED::SET_PED_WETNESS_HEIGHT(), this native makes the ped drenched in water up to the height specified in the other function
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function setPedWetnessEnabledThisFrame(ped: PedIndex): void {
	const setPedWetnessEnabledThisFrame_result = Citizen.invokeNative<void>('0x0DFA7D3DCFE10E65', ped);
	return setPedWetnessEnabledThisFrame_result;
}