
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MainLoader } from '../../Components';
import { PredictionApi } from '../../Apis/prediction-api';
import { AuthService } from '../../storage/auth-service';
import { ToastrService } from '@openng/ngx-toastr';

@Component({
  imports: [RouterLink, ReactiveFormsModule, MainLoader],
  selector: 'app-prediction-component',
  styleUrl: './prediction-component.css',
  templateUrl: './prediction-component.html',
})
export class PredictionComponent {

  loading = signal<boolean>(false);

  // null = Awaiting prediction
  // true = Potential motor failure
  // false = Motor operating normally
  predictionResult = signal<boolean | null>(null);

  constructor(
    private predictionApi: PredictionApi,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  predictionForm = new FormGroup({

    temperature: new FormControl(0, {
      nonNullable: true,
      validators: [Validators.required]
    }),

    vibration: new FormControl(0, {
      nonNullable: true,
      validators: [Validators.required]
    }),

    motorSpeed: new FormControl(0, {
      nonNullable: true,
      validators: [Validators.required]
    }),

    operatingHours: new FormControl(0, {
      nonNullable: true,
      validators: [Validators.required]
    }),

  });

  getPrediction() {

    if (this.predictionForm.invalid) {
      this.predictionForm.markAllAsTouched();
      return;
    }

    const predictionInputData = this.predictionForm.getRawValue();

    this.loading.set(true);
    this.predictionResult.set(null);

    this.predictionApi.predictMotorFailure(predictionInputData).subscribe({

      next: (response) => {

        console.log(response);

        this.predictionResult.set(response.predictedFailure);

        this.toastr.success(
          'Prediction generated successfully!'
        );

        this.loading.set(false);

      },

      error: (error) => {

        console.error(error);

        this.loading.set(false);

        this.toastr.error(
          'Error Occurred!'
        );

      }

    });

  }

}
