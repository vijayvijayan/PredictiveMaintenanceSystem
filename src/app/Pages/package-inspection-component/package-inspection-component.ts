
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageInspectionApi } from '../../Apis/package-inspection-api';
import { PackageDamageResponseDTO } from '../../Interface/package-damage-response-DTO';

@Component({
  selector: 'app-package-inspection-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './package-inspection-component.html',
  styleUrl: './package-inspection-component.css'
})
export class PackageInspectionComponent {

  selectedFile: File | null = null;

  imagePreview = signal<string | null>(null);
  predictionResult = signal<PackageDamageResponseDTO | null>(null);
  loading = signal(false);
  errorMessage = signal<string | null>(null);

  constructor(private packageInspectionApi: PackageInspectionApi) {}

  onFileSelected(event: Event): void {

    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith('image/')) {
      this.errorMessage.set('Please select a valid image file.');
      return;
    }

    this.selectedFile = file;

    this.predictionResult.set(null);
    this.errorMessage.set(null);

    if (this.imagePreview()) {
      URL.revokeObjectURL(this.imagePreview()!);
    }

    this.imagePreview.set(URL.createObjectURL(file));
  }

  inspectPackage(): void {

    if (!this.selectedFile) {
      this.errorMessage.set('Please select a package image first.');
      return;
    }

    this.loading.set(true);
    this.predictionResult.set(null);
    this.errorMessage.set(null);

    this.packageInspectionApi.detectDamage(this.selectedFile)
      .subscribe({
        next: (response) => {
          this.predictionResult.set(response);
          this.loading.set(false);
        },
        error: (error) => {
          console.error('Package inspection failed:', error);

          this.errorMessage.set(
            'Unable to inspect the package. Please try again.'
          );

          this.loading.set(false);
        }
      });
  }

  clearImage(): void {

    const preview = this.imagePreview();

    if (preview) {
      URL.revokeObjectURL(preview);
    }

    this.selectedFile = null;
    this.imagePreview.set(null);
    this.predictionResult.set(null);
    this.errorMessage.set(null);
  }
}
