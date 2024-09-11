export enum EBlipDisplay {
	DisplayNothing,
	DisplayMarker,
	DisplayBlip,
	DisplayMap, // used to only display this blip on the frontend map (it wont display on the radar or have a marker)
	DisplayBoth,
	DisplayRadarOnly, // only display blip on the radar (opposite of DISPLAY_MAP) - NOTE
	DisplayMapZoomed, // display this blip on radar and only on map when map is zoomed fully in
	DisplayBigmapFullOnly, // display on zoomed out version of the bigmap only
	DisplayMinimapOrBigmap, // display on normal minimap or bigmap (but not on the full zoomed map)
}