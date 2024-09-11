/**
 * CUTSCENE:GET_CUTSCENE_SECTION_PLAYING
 *
 * 0xF9B18AB51CBCDF5C

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getCutsceneSectionPlaying(): number {
	const getCutsceneSectionPlaying_result = Citizen.invokeNative<number>('0xF9B18AB51CBCDF5C', );
	return getCutsceneSectionPlaying_result;
}