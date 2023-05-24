import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class SpinnerService {
    spinnerShow: boolean = false;
    constructor() {
  
    }

    showSpinner() {
        this.spinnerShow = true;
      }
    
      hideSpinner() {
        this.spinnerShow = false;
      }
    
      isVisible(): boolean {
        return this.spinnerShow;
      }
  }