export enum EShapetestStatus {
	Nonexistent, // Shapetest requests are discarded if they are ignored for a frame or as soon as the results are returned
	ResultsNotready, // Not ready yet; try again next frame
	ResultsReady, // The result is ready and the results have been returned to you. The shapetest request has also just been destroyed
}