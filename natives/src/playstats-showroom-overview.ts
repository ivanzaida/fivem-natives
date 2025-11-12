/**
 * STATS:_PLAYSTATS_SHOWROOM_OVERVIEW
 *
 * 0x151D6C04C9E2742F

 * 
 * Data struct contains various tunables related to test drives at Simeons Showroom or Luxury Showcase.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function playstatsShowroomOverview(): void {
	const playstatsShowroomOverview_result = Citizen.invokeNative<void>('0x151D6C04C9E2742F', );
	return playstatsShowroomOverview_result;
}