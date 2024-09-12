import { StuntjumpId } from '@ivanzaida/structures'

/**
 * MISC:DELETE_STUNT_JUMP
 *
 * 0xDE4E7D1D52BD4533

 * 
 * ------------------------------------------------------------------
 * @param {StuntjumpId} id
 */
export function deleteStuntJump(id: StuntjumpId): void {
	const deleteStuntJump_result = Citizen.invokeNative<void>('0xDE4E7D1D52BD4533', id);
	return deleteStuntJump_result;
}