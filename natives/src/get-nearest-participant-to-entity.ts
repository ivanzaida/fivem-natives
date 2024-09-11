/**
 * ENTITY:GET_NEAREST_PARTICIPANT_TO_ENTITY
 *
 * 0xFFBD7052D65BE0FF

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getNearestParticipantToEntity(): number {
	const getNearestParticipantToEntity_result = Citizen.invokeNative<number>('0xFFBD7052D65BE0FF', );
	return getNearestParticipantToEntity_result;
}