import { EPedBonetag, PedIndex } from '@ivanzaida/structures'

/**
 * CAM:GET_FOCUS_PED_ON_SCREEN
 *
 * 0x00926C3C4443B915

 * 
 * ------------------------------------------------------------------
 * @param {number} maxDistanceFromCamera The maximum valid distance from the camera to candidate peds.
 * @param {EPedBonetag} screenPositionTestBoneTag If valid (not BONETAG_NULL), this specified the candidate ped bone to be tested for valid screen position.
 * @param {number} maxScreenWidthRatioAroundCentreForTestBone The ratio of the screen width around the screen centre within which the specified test bone of a candidate ped must be located.
 * @param {number} maxScreenHeightRatioAroundCentreForTestBone The ratio of the screen height around the screen centre within which the specified test bone of a candidate ped must be located.
 * @param {number} minRelativeHeadingScore Defines the minimum scaling of a candidate ped's score that will be applied if the ped is at the far left or far right of the screen (at the maximum camerarelative heading.)
 * @param {number} maxScreenCentreScoreBoost The maximum factor by which to boost a candidate ped's score when they are roughly centred on the screen.
 * @param {number} maxScreenRatioAroundCentreForScoreBoost The ratio of the screen width located around the screen centre to apply the screenCentreScoreBoost.
 * @param {EPedBonetag} losTestBoneTag1 /losTestBoneTag2
 * @param {EPedBonetag} losTestBoneTag2
 * @returns {PedIndex}  
 */
export function getFocusPedOnScreen(maxDistanceFromCamera: number = 30, screenPositionTestBoneTag: EPedBonetag | number = 31086, maxScreenWidthRatioAroundCentreForTestBone: number = 0.8, maxScreenHeightRatioAroundCentreForTestBone: number = 0.7, minRelativeHeadingScore: number = 0.25, maxScreenCentreScoreBoost: number = 8, maxScreenRatioAroundCentreForScoreBoost: number = 0.333, losTestBoneTag1: EPedBonetag | number = 31086, losTestBoneTag2: EPedBonetag | number = 24818): PedIndex {
	const getFocusPedOnScreen_result = Citizen.invokeNative<PedIndex>('0x00926C3C4443B915', maxDistanceFromCamera, screenPositionTestBoneTag, maxScreenWidthRatioAroundCentreForTestBone, maxScreenHeightRatioAroundCentreForTestBone, minRelativeHeadingScore, maxScreenCentreScoreBoost, maxScreenRatioAroundCentreForScoreBoost, losTestBoneTag1, losTestBoneTag2);
	return getFocusPedOnScreen_result;
}