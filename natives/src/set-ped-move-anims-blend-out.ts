import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_MOVE_ANIMS_BLEND_OUT
 *
 * 0x6EC1B5B2C6C31862

 * 
 * Cant be used on network scripts.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function setPedMoveAnimsBlendOut(ped: PedIndex): void {
	const setPedMoveAnimsBlendOut_result = Citizen.invokeNative<void>('0x6EC1B5B2C6C31862', ped);
	return setPedMoveAnimsBlendOut_result;
}