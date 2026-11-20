export interface PackageDetection {
  className: string;
  confidence: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface PackageDamageResponseDTO {
  isDamaged: boolean;
  confidence: number;
  detections: PackageDetection[];
}