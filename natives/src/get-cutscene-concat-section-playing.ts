/**
 * CUTSCENE:GET_CUTSCENE_CONCAT_SECTION_PLAYING
 *
 * 0x6BC87CF59151C630

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getCutsceneConcatSectionPlaying(): number {
	const getCutsceneConcatSectionPlaying_result = Citizen.invokeNative<number>('0x6BC87CF59151C630', );
	return getCutsceneConcatSectionPlaying_result;
}